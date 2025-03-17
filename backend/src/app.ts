// src/index.ts
import express, { Express } from 'express'
// @ts-ignore
import morgan from 'morgan'
// @ts-ignore
import cors from 'cors'
import * as dotenv from 'dotenv'
import helmet from 'helmet'

// @ts-ignore
import swaggerUi from 'swagger-ui-express'
// @ts-ignore
import swaggerDocument from './swagger.json'

import { BaseRouter } from './routes/BaseRouter'
import { BaseController } from './controllers/BaseController'
import { BaseService } from './services/BaseService'

import https from 'https'
import fs from 'fs'
import path from 'path'

// Caminho para os arquivos de certificado a fim de rodar a aplicação em https
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
}

dotenv.config()

// configuraçãod e CORS
const corsOptions: cors.CorsOptions = {
  origin: '*', // All origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed
  allowedHeaders: ['Content-Type', 'Authorization'], // headers
  credentials: true, // cretentials true
}

type TServerProtocol = 'https' | 'http'

type TBaseRouter = BaseRouter<
  BaseController<
    BaseService<Record<string, any>, Record<string, any>, Record<string, any>>
  >
>

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || ''

export type TRouteConfig = {
  basePath: string
  baseRouter: TBaseRouter
}

class App {
  // class-based express App
  public app: Express
  public routesConfig: TRouteConfig[]

  constructor(routes: TRouteConfig[]) {
    this.app = express()
    this.routesConfig = routes
    this.initializeMiddlewares()
    this.initializeRoutes()
  }

  // initialize middlewares
  private initializeMiddlewares(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cors(corsOptions))
    this.app.options('*', cors(corsOptions))
    this.app.use(
      helmet({
        crossOriginResourcePolicy: false,
      }),
    )
    // Terminal de forma amigável
    this.app.use(morgan('dev'))
    // para acessar docs: https://localhost:3000/api-docs/ ou http://localhost:3000/api-docs/
    this.app.use('api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  }

  // initialize routes
  private initializeRoutes(): void {
    this.routesConfig.forEach(config => {
      this.app.use(config.basePath, config.baseRouter.router)
    })
  }


  /**
   * Starts the server and listens on the specified port using the given protocol.
   * 
   * @param {TServerProtocol} [protocol='http'] - The protocol to use for the server ('http' or 'https').
   * 
   * If the protocol is 'https', it creates an HTTPS server with the provided SSL options.
   * Otherwise, it creates an HTTP server.
   * 
   * The server listens on the port specified by the `PORT` constant and logs the host and port information to the console.
   */
  public listen(protocol: TServerProtocol = 'http'): void {
    if (protocol === 'https') {
      https.createServer(sslOptions, this.app).listen(PORT, () => {
        console.log(`Host: ${HOST}. Listening on port ${PORT}`)
      })
    } else {
      this.app.listen(PORT, () => {
        console.log(`Host: ${HOST}. Listening on port ${PORT}`)
      })
    }
  }
}

export default App
