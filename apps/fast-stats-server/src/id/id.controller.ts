import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common'
import { Response } from 'express'
import { IdService } from './id.service'

@Controller('id')
export class IdController {
  constructor(private readonly idService: IdService) {}

  @Get(':customUrl')
  public async byId(
    @Param('customUrl') customUrl: string,
    @Res() res: Response
  ) {
    const redirectUrl = await this.idService.getRedirectUrl(customUrl)

    return res.status(HttpStatus.FOUND).redirect(redirectUrl)
  }
}
