import { Router } from 'express'

export abstract class BaseRouter<T> {
  public router: Router
  public controller: T

  constructor(controller: T) {
    this.router = Router()
    this.controller = controller
    this.initRoutes()
  }

  /**
   * Cada subclasse deve implementar esse método para definir as rotas.
   */
  protected abstract initRoutes(): void
}
