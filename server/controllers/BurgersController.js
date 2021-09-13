import { logger } from '../../client/app/Utils/Logger'
import { burgerService } from '../services/BurgersService'
import BaseController from '../utils/BaseController'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('', this.getBurger)
      .post('', this.createBurger)
    logger.log('Hello from the burgers controller!')
  }

  async getBurgers(req, res, next) {
    try {
      const burgers = burgerService.find()
      return res.body(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    throw new Error('Method not implemented.')
  }

  async getBurger(req, res, next) {
    throw new Error('Method not implemented.')
  }
}
