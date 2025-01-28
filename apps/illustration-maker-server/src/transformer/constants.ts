import { TransformOption } from './types'

export const TEMPORAL_DIR_NAME = 'temporal'
export const DEFAULT_GIF_WIDTH = 614

const QUALITY_OPTIONS = [
  100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30,
]
export const QUALITY_MAP = QUALITY_OPTIONS.reduce((acc, quality) => {
  if (quality === 100) {
    acc.set(quality, 256)
  } else {
    acc.set(quality, Math.round(256 * (quality / 100)))
  }

  return acc
}, new Map<number, number>())

export const TRANSFORM_OPTIONS: TransformOption[] = [
  {
    width: 506,
    position: 'left',
    filenameSuffix: '_left.gif',
  },
  {
    width: 100,
    position: 'right',
    filenameSuffix: '_right.gif',
  },
]
