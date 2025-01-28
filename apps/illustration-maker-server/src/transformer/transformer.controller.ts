import {
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
    @Res() res: Response
  ) {
    const filename = await this.transformerService.transform(file.filename)

    return res.sendFile(filename)
  }
}
