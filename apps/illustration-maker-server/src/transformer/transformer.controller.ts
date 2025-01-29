import {
  Body,
  Controller,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Response } from 'express'
import { TransformerService } from './transformer.service'

@Controller('transformer')
export class TransformerController {
  constructor(private readonly transformerService: TransformerService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { quality: number },
    @Res() res: Response
  ) {
    const { quality = 100 } = body

    const filename = await this.transformerService.transform(
      file.filename,
      quality
    )

    return res.sendFile(filename)
  }
}
