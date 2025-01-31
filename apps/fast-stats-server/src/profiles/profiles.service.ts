import { Injectable } from '@nestjs/common'
import { CSSTATS_BASE_URL } from '../shared/constants'

@Injectable()
export class ProfilesService {
  public getRedirectUrl(id: string) {
    return `${CSSTATS_BASE_URL}${id}`
  }
}
