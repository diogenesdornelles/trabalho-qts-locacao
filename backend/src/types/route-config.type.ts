import { BaseRouterType } from './base-router.type'

// Route configuration type: associates a base path with its corresponding router.
export type RouteConfigType = {
  basePath: string
  baseRouter: BaseRouterType
}
