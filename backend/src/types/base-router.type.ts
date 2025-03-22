import { BaseController } from '../controllers/base.controller'
import { BaseRouter } from '../routes/base.routes'
import { BaseService } from '../services/base.service'

// Generic type for a base router that is associated with a controller and service.
export type BaseRouterType = BaseRouter<
  BaseController<
    BaseService<Record<string, any>, Record<string, any>, Record<string, any>>
  >
>
