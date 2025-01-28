import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { join } from 'node:path'
import { TEMPORAL_DIR_NAME } from './constants'
import { TransformerController } from './transformer.controller'
import { TransformerService } from './transformer.service'

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, TEMPORAL_DIR_NAME),
        filename: (_, file, cb) => {
          const filename = `${Date.now()}-${file.originalname}`
          cb(null, filename)
        },
      }),
    }),
  ],
  providers: [TransformerService],
  controllers: [TransformerController],
})
export class TransformerModule {}
