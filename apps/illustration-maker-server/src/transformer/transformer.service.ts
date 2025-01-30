import { BadRequestException, Injectable } from '@nestjs/common'
import { resolve } from 'node:path'
import { Piscina } from 'piscina'
import { FILE_EXTENSION, MAX_FILE_SIZE_MB } from './constants'
import { convertBytesToMegabytes } from './utils'

@Injectable()
export class TransformerService {
  private readonly workerPiscina = new Piscina({
    filename: resolve(__dirname, 'transformer.worker.piscina.js'),
  })

  private validateFile(file: Express.Multer.File) {
    if (!file.filename.endsWith(FILE_EXTENSION)) {
      throw new BadRequestException('The service supports GIF files only.')
    }

    if (convertBytesToMegabytes(file.size) > MAX_FILE_SIZE_MB) {
      throw new BadRequestException(
        'The service supports files smaller than 8MB.'
      )
    }
  }

  async transform(file: Express.Multer.File, quality: number): Promise<string> {
    this.validateFile(file)

    return await this.workerPiscina.run({ filename: file.filename, quality })
  }
}
