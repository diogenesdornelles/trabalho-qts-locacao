import { AuthPayloadInterface } from './authPayload.interface'
import { Request } from 'express'

export interface CustomRequestInterface extends Request {
  token: AuthPayloadInterface
}
