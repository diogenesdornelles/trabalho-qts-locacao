// src/index.ts
import * as dotenv from 'dotenv'
dotenv.config()
import App from './app'
import appRoutes from './appRoutes'


/**
 * Clase que tem como objetivo rodar o server app
 *
 */
export default class Server {
  private app: App = new App(appRoutes)

  constructor() {
    this.app = new App(appRoutes)
    this.app.listen('https')
  }
}

new Server()
