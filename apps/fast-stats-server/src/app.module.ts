import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'node:path'
import { FetchIdModule } from './fetch-id/fetch-id.module'
import { IdModule } from './id/id.module'
import { ProfilesModule } from './profiles/profiles.module'

@Module({
  imports: [
    FetchIdModule,
    ProfilesModule,
    IdModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'fast-stats-web', 'dist'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
