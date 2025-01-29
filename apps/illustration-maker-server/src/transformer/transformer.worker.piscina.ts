import { readFile, unlink } from 'node:fs/promises'
import { join } from 'node:path'
import * as sharp from 'sharp'
import { Zip } from 'zip-lib'
import {
  DEFAULT_GIF_WIDTH,
  QUALITY_MAP,
  TEMPORAL_DIR_NAME,
  TRANSFORM_OPTIONS,
} from './constants'

const getOutputFileName = (filename: string) =>
  join(__dirname, TEMPORAL_DIR_NAME, filename)

async function transform(filename: string, quality: number) {
  const buffer = await readFile(join(__dirname, TEMPORAL_DIR_NAME, filename))
  const resized = sharp(buffer, { animated: true }).resize({
    width: DEFAULT_GIF_WIDTH,
  })

  const { height = 100, width = 100, pages = 1 } = await resized.metadata()
  const fixedHeight = Math.round((height / pages) * (width / DEFAULT_GIF_WIDTH))

  await Promise.all(
    TRANSFORM_OPTIONS.map((option) => {
      const { position, width, filenameSuffix } = option

      return resized
        .resize({
          position,
          width,
          height: fixedHeight,
          fit: 'cover',
        })
        .gif({
          colors: QUALITY_MAP[quality],
        })
        .toFile(getOutputFileName(filename + filenameSuffix))
    })
  )

  const zip = new Zip()

  TRANSFORM_OPTIONS.forEach(({ filenameSuffix }) =>
    zip.addFile(getOutputFileName(filename + filenameSuffix))
  )

  const archiveFilename = getOutputFileName(filename + '.zip')

  await zip.archive(archiveFilename)

  await Promise.all(
    TRANSFORM_OPTIONS.map(({ filenameSuffix }) =>
      unlink(getOutputFileName(filename + filenameSuffix))
    )
  )

  await unlink(join(__dirname, TEMPORAL_DIR_NAME, filename))

  return archiveFilename
}

module.exports = ({
  filename,
  quality,
}: {
  filename: string
  quality: number
}) => {
  return transform(filename, quality)
}
