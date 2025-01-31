import { Injectable } from '@nestjs/common'
import { customUrlToSteamID64 } from 'steamid-resolver'

@Injectable()
export class FetchIdService {
  public getId(customUrl: string) {
    return customUrlToSteamID64(customUrl)
  }
}
