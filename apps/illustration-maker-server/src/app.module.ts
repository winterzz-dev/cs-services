import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TransformerModule } from './transformer/transformer.module'

@Module({
  imports: [TransformerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
