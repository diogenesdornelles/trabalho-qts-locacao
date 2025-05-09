/**
 * @file src/index.ts
 * @description Main entry point for the Express application.
 * It sets up middlewares, routes, and starts the server (HTTP or HTTPS).
 */

// src/index.ts
import * as dotenv from 'dotenv'
dotenv.config()
import App from './app'
import appRoutes from './appRoutes'

/**
 * Receives route settings and makes the app listen, by default https.
 *
 * @export
 * @class Server
 */
export default class Server {
  private app: App
  /**
   * Creates an instance of Server.
   * @memberof Server
   */
  constructor() {
    this.app = new App(appRoutes)
    // use 'https' for https
    this.app.listen('http')
  }
}

new Server()
