import { CacheModule } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'
import { FetchIdModule } from '../fetch-id/fetch-id.module'
import { ProfilesModule } from '../profiles/profiles.module'
import { IdController } from './id.controller'
import { IdService } from './id.service'

@Module({
  providers: [IdService],
  controllers: [IdController],
  imports: [ProfilesModule, FetchIdModule, CacheModule.register()],
})
export class IdModule {}
