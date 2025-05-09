import FuncionarioRouter from './routes/funcionario.router'
import BrinquedoRouter from './routes/brinquedo.router'
import TipoBrinquedoRouter from './routes/tipoBrinquedo.router'
import LocacaoRouter from './routes/locacao.router'
import ClienteRouter from './routes/cliente.router'
import PagamentoRouter from './routes/pagamento.router'
import LoginRouter from './routes/login.router'
import BrinquedoLocadoRouter from './routes/brinquedoLocado.router'
import { RouteConfigType } from './types/routeConfig.type'

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
