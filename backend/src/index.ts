// src/index.ts
import * as dotenv from 'dotenv'
dotenv.config()
import App from './app'
import FuncionarioRouter from './routes/FuncionariosRoutes'
import BrinquedoRouter from './routes/BrinquedosRoutes'
import TipoBrinquedoRouter from './routes/TiposBrinquedosRoutes'
import LocacaoRouter from './routes/LocacoesRoutes'
import ClienteRouter from './routes/ClientesRoutes'
import PagamentoRouter from './routes/PagamentosRoutes'
import { TRouteConfig } from './app'
import BrinquedoLocadoRouter from './routes/BrinquedosLocadosRoutes'
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
]

export default class Start {
  private app: App = new App(allRoutes)

  constructor() {
    this.app = new App(allRoutes)
    this.app.listen('https')
  }
}

new Start()
