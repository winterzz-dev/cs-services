import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common'
import { Response } from 'express'
import { ProfilesService } from './profiles.service'

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get(':id')
  public byId(@Param('id') id: string, @Res() res: Response) {
    return res
      .status(HttpStatus.FOUND)
      .redirect(this.profilesService.getRedirectUrl(id))
  }
}
