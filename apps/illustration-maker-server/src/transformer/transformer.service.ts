import { Injectable } from '@nestjs/common'
import { resolve } from 'node:path'
import { Piscina } from 'piscina'

@Injectable()
export class TransformerService {
  private readonly workerPiscina = new Piscina({
    filename: resolve(__dirname, 'transformer.worker.piscina.js'),
  })

  async transform(filename: string): Promise<string> {
    return await this.workerPiscina.run(filename)
  }
}
