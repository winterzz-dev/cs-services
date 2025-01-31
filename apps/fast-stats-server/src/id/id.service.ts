import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'
import { FetchIdService } from '../fetch-id/fetch-id.service'
import { ProfilesService } from '../profiles/profiles.service'
import { CACHE_TTL } from './constants'

@Injectable()
export class IdService {
  constructor(
    private readonly profileService: ProfilesService,
    private readonly fetchIdService: FetchIdService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  public async getRedirectUrl(customUrl: string) {
    const idFromCache = await this.cacheManager.get<string>(customUrl)
    const id = idFromCache || (await this.fetchIdService.getId(customUrl))

    await this.cacheManager.set(customUrl, id, CACHE_TTL)

    return this.profileService.getRedirectUrl(id)
  }
}
