import { Module } from '@nestjs/common'
import { FetchIdService } from './fetch-id.service'

@Module({
  providers: [FetchIdService],
  exports: [FetchIdService],
})
export class FetchIdModule {}
