import express, { Express } from 'express'
// Importing morgan for HTTP request logging
// @ts-ignore
import morgan from 'morgan'
// Importing cors to handle Cross-Origin Resource Sharing (CORS)
// @ts-ignore
import cors from 'cors'
import * as dotenv from 'dotenv'
import helmet from 'helmet'

// Importing Swagger UI for API documentation
// @ts-ignore
import swaggerUi from 'swagger-ui-express'
// @ts-ignore
import swaggerDocument from './swagger.json'

import https from 'https'
import fs from 'fs'
import path from 'path'
import { RouteConfigType } from './types/route-config.type'
import { ServerProtocolType } from './types/server-protocol.type'

// SSL certificate options for running the application over HTTPS.
// Reads the key and certificate files from the 'cert' directory.
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
}

dotenv.config()

// CORS configuration options
const corsOptions: cors.CorsOptions = {
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}

// Set server port and host using environment variables or default values.
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || ''

/**
 * App class encapsulates the Express application.
 * It configures middlewares, routes, and provides a method to start the server.
 */
class App {
  // The Express application instance.
  public app: Express
  // Array of route configurations.
  public routesConfig: RouteConfigType[]

  /**
   * Creates an instance of App.
   * @param {RouteConfigType[]} routes - Array of route configurations.
   */
  constructor(routes: RouteConfigType[]) {
    this.app = express()
    this.routesConfig = routes
    this.initializeMiddlewares()
    this.initializeRoutes()
  }

  /**
   * Initializes all middlewares used by the application.
   */
  private initializeMiddlewares(): void {
    // Middleware to parse incoming JSON requests.
    this.app.use(express.json())
    // Middleware to parse URL-encoded data.
    this.app.use(express.urlencoded({ extended: true }))
    // Enable CORS with the defined options.
    this.app.use(cors(corsOptions))
    // Handle pre-flight CORS requests.
    this.app.options('*', cors(corsOptions))
    // Secure the app by setting various HTTP headers using Helmet.
    this.app.use(
      helmet({
        crossOriginResourcePolicy: false,
      }),
    )
    // Use Morgan to log HTTP requests in a developer-friendly format.
    this.app.use(morgan('dev'))
    // Setup API documentation route.
    // Accessible via: https://localhost:3000/api/docs/ or http://localhost:3000/api/docs/
    this.app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  }

  /**
   * Initializes all routes defined in the route configuration.
   */
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
   * The server listens on the port specified by the `PORT` constant and logs the host and port information.
   */
  public listen(protocol: ServerProtocolType = 'http'): void {
    if (protocol === 'https') {
      https.createServer(sslOptions, this.app).listen(PORT, () => {
        console.log(`Host: ${HOST}. Listening on port ${PORT}
          Do requests at ${protocol}://${HOST}:${PORT}/api
          See documentation at ${protocol}://${HOST}:${PORT}/api/docs
          `)
      })
    } else {
      this.app.listen(PORT, () => {
        console.log(`Host: ${HOST}. Listening on port ${PORT} and protocol ${protocol.toUpperCase()}!
          Do requests at ${protocol}://${HOST}:${PORT}/api
          See documentation at ${protocol}://${HOST}:${PORT}/api/docs
        `)
      })
    }
  }
}

export default App
