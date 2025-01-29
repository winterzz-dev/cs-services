import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'node:path'
import { TransformerModule } from './transformer/transformer.module'

@Module({
  imports: [
    TransformerModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'illustration-maker-web', 'dist'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
