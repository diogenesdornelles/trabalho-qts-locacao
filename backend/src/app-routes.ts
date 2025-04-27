import FuncionarioRouter from './routes/funcionarios.routes'
import BrinquedoRouter from './routes/brinquedos.routes'
import TipoBrinquedoRouter from './routes/tipos-brinquedos.routes'
import LocacaoRouter from './routes/locacoes.routes'
import ClienteRouter from './routes/clientes.routes'
import PagamentoRouter from './routes/pagamentos.routes'
import LoginRouter from './routes/login.routes'
import BrinquedoLocadoRouter from './routes/brinquedos-locados.routes'
import { RouteConfigType } from './types/route-config.type'

// Registers routes and paths into Array to fill app
const appRoutes: RouteConfigType[] = [
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
    basePath: '/api/login',
  },
]

export default appRoutes
