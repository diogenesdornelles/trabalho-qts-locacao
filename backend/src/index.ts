// src/index.ts
import * as dotenv from 'dotenv'
dotenv.config()
import App from './app'
import FuncionarioRouter from './routes/funcionarios.routes'
import BrinquedoRouter from './routes/brinquedos.routes'
import TipoBrinquedoRouter from './routes/tiposBrinquedos.routes'
import LocacaoRouter from './routes/locacoes.routes'
import ClienteRouter from './routes/clientes.routes'
import PagamentoRouter from './routes/pagamentos.routes'
import LoginRouter from './routes/login.routes'
import { TRouteConfig } from './app'
import BrinquedoLocadoRouter from './routes/brinquedosLocados.routes'

/**
 * run a app
 *
 */

const allRoutes: TRouteConfig[] = [
  {
    baseRouter: new FuncionarioRouter(),
    basePath: '/api/funcionarios',
  },
  {
    baseRouter: new BrinquedoRouter(),
    basePath: '/api/brinquedos',
  },
  {
    baseRouter: new BrinquedoLocadoRouter(),
    basePath: '/api/brinquedosLocados',
  },
  {
    baseRouter: new TipoBrinquedoRouter(),
    basePath: '/api/tiposBrinquedos',
  },
  {
    baseRouter: new ClienteRouter(),
    basePath: '/api/clientes',
  },
  {
    baseRouter: new LocacaoRouter(),
    basePath: '/api/locacoes',
  },
  {
    baseRouter: new PagamentoRouter(),
    basePath: '/api/pagamentos',
  },
  {
    baseRouter: new LoginRouter(),
    basePath: '/api/pagamentos',
  },
]

export default class Start {
  private app: App = new App(allRoutes)

  constructor() {
    this.app = new App(allRoutes)
    this.app.listen('https')
  }
}

new Start()
