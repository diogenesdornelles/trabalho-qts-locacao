'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const funcionarios_routes_1 = __importDefault(
  require('./routes/funcionarios.routes'),
)
const brinquedos_routes_1 = __importDefault(
  require('./routes/brinquedos.routes'),
)
const tiposBrinquedos_routes_1 = __importDefault(
  require('./routes/tiposBrinquedos.routes'),
)
const locacoes_routes_1 = __importDefault(require('./routes/locacoes.routes'))
const clientes_routes_1 = __importDefault(require('./routes/clientes.routes'))
const pagamentos_routes_1 = __importDefault(
  require('./routes/pagamentos.routes'),
)
const login_routes_1 = __importDefault(require('./routes/login.routes'))
const brinquedosLocados_routes_1 = __importDefault(
  require('./routes/brinquedosLocados.routes'),
)
// Registers routes and paths
const appRoutes = [
  {
    baseRouter: new funcionarios_routes_1.default(),
    basePath: '/api/funcionarios',
  },
  {
    baseRouter: new brinquedos_routes_1.default(),
    basePath: '/api/brinquedos',
  },
  {
    baseRouter: new brinquedosLocados_routes_1.default(),
    basePath: '/api/brinquedosLocados',
  },
  {
    baseRouter: new tiposBrinquedos_routes_1.default(),
    basePath: '/api/tiposBrinquedos',
  },
  {
    baseRouter: new clientes_routes_1.default(),
    basePath: '/api/clientes',
  },
  {
    baseRouter: new locacoes_routes_1.default(),
    basePath: '/api/locacoes',
  },
  {
    baseRouter: new pagamentos_routes_1.default(),
    basePath: '/api/pagamentos',
  },
  {
    baseRouter: new login_routes_1.default(),
    basePath: '/api/login',
  },
]
exports.default = appRoutes
