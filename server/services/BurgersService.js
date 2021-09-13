import { logger } from '../../client/app/Utils/Logger'

class BurgersService {
  constructor() {
    logger.log('Hello from the burger Service!')
  }

  find() {
    logger.log('nana')
  }
}

export const burgerService = new BurgersService()
