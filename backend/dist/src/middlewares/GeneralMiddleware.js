'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        var desc = Object.getOwnPropertyDescriptor(m, k)
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k]
            },
          }
        }
        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = []
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k
          return ar
        }
      return ownKeys(o)
    }
    return function (mod) {
      if (mod && mod.__esModule) return mod
      var result = {}
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== 'default') __createBinding(result, mod, k[i])
      __setModuleDefault(result, mod)
      return result
    }
  })()
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const GeneralValidator_1 = __importDefault(
  require('../validators/GeneralValidator'),
)
const prisma_client_1 = require('../../generated/prisma_client')
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'))
const dotenv = __importStar(require('dotenv'))
const CreateFuncionarioValidator_1 = require('../validators/CreateFuncionarioValidator')
const zod_1 = require('zod')
dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY || 'r34534erfefgdf7576ghfg4455456'
class GeneralMiddleware {}
GeneralMiddleware.validateCpf = (req, res, next) => {
  let { cpf } = req.params
  if (GeneralValidator_1.default.validateCpf(cpf)) {
    next()
    return
  }
  res.status(400).json({
    error: 'Invalid CPF format. Please provide a valid CPF.',
  })
  return
}
GeneralMiddleware.validateUUID = (req, res, next) => {
  let { cod } = req.params
  if (GeneralValidator_1.default.validateUUID(cod)) {
    next()
    return
  }
  res.status(400).json({
    error: 'Invalid UUID format. Please provide a valid UUID.',
  })
  return
}
GeneralMiddleware.errorHandler = (error, req, res, next) => {
  console.error('Error:', error)
  // Trata erros de validação do Zod
  if (error instanceof zod_1.z.ZodError) {
    console.error(`Validation error on ${req.method} resource:`, error.errors)
    res.status(400).json({
      error: 'Validation error',
      details: error.errors,
    })
    return
  }
  // Função auxiliar para capturar mensagens do Prisma
  const extractPrismaErrorMessage = error => {
    const errorSplitted = error.message.split('\n')
    return errorSplitted[errorSplitted.length - 1] // Retorna a última linha do erro
  }
  // Trata erros do Prisma
  if (
    error instanceof prisma_client_1.Prisma.PrismaClientInitializationError ||
    error instanceof prisma_client_1.Prisma.PrismaClientKnownRequestError ||
    error instanceof prisma_client_1.Prisma.PrismaClientValidationError
  ) {
    const errorMessage = extractPrismaErrorMessage(error)
    console.error(`Database error on ${req.method} resource:`, error.message)
    res.status(500).json({
      error: 'Database error',
      details: errorMessage,
    })
    return
  }
  // Trata erros genéricos
  if (error instanceof Error) {
    console.error(`Unexpected error on ${req.method} resource:`, error.message)
    res.status(500).json({
      error: 'Internal server error',
      details: error.message,
    })
    return
  }
  // Caso nenhum dos tratamentos anteriores se aplique
  console.error('An unknown error occurred:', error)
  res.status(500).json({
    error: 'Unknown error',
    details: 'An unexpected error occurred while processing the request.',
  })
  return
}
GeneralMiddleware.validateBodyRequest = (req, res, next) => {
  if (req.method.toLocaleLowerCase() !== 'get') {
    if (!req.body || Object.keys(req.body).length === 0) {
      res.status(400).json({ message: 'Invalid requisition' })
      return
    }
  }
  next()
  return
}
GeneralMiddleware.authentication = (req, res, next) => {
  var _a
  try {
    const token =
      (_a = req.header('Authorization')) === null || _a === void 0
        ? void 0
        : _a.replace('Bearer ', '')
    if (!token) {
      throw new Error()
    }
    const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY)
    req.token = decoded
    next()
  } catch (err) {
    res.status(401).send('Please authenticate')
    return
  }
}
GeneralMiddleware.authorizationGerente = (req, res, next) => {
  const { token } = req
  // Verifica se há token e se a função é "GERENTE"
  if (
    !token ||
    token.funcao !== CreateFuncionarioValidator_1.FuncaoEnum.Values.GERENTE
  ) {
    res.status(403).json({ message: 'Access denied: gerente only' })
    return
  }
  next()
}
GeneralMiddleware.authorizationAlmoxarife = (req, res, next) => {
  const { token } = req
  // Verifica se há token e se a função é "ALMOXARIFE"
  if (
    !token ||
    token.funcao !== CreateFuncionarioValidator_1.FuncaoEnum.Values.ALMOXARIFE
  ) {
    res.status(403).json({ message: 'Access denied: almoxarife only' })
    return
  }
  next()
}
GeneralMiddleware.authorizationAnalistaCadastro = (req, res, next) => {
  const { token } = req
  // Verifica se há token e se a função é "ANALISTA_CADASTRO"
  if (
    !token ||
    token.funcao !==
      CreateFuncionarioValidator_1.FuncaoEnum.Values.ANALISTA_CADASTRO
  ) {
    res.status(403).json({ message: 'Access denied: analista cadastro only' })
    return
  }
  next()
}
GeneralMiddleware.authorizationAnalistaLocacao = (req, res, next) => {
  const { token } = req
  // Verifica se há token e se a função é "AGENTE_LOCACAO"
  if (
    !token ||
    token.funcao !==
      CreateFuncionarioValidator_1.FuncaoEnum.Values.AGENTE_LOCACAO
  ) {
    res.status(403).json({ message: 'Access denied: agente locacao only' })
    return
  }
  next()
}
GeneralMiddleware.authorizationCaixa = (req, res, next) => {
  const { token } = req
  // Verifica se há token e se a função é "CAIXA"
  if (
    !token ||
    token.funcao !== CreateFuncionarioValidator_1.FuncaoEnum.Values.CAIXA
  ) {
    res.status(403).json({ message: 'Access denied: caixa only' })
    return
  }
  next()
}
exports.default = GeneralMiddleware
