import { Request, Response, NextFunction } from 'express'
import GeneralValidator from '../validators/GeneralValidator'
import { Prisma } from '../../generated/prisma_client'
import jwt, { Secret, JwtPayload } from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { FuncaoEnum } from '../validators/CreateFuncionarioValidator'
import { z } from 'zod'

dotenv.config()

const SECRET_KEY: Secret =
  process.env.SECRET_KEY || 'r34534erfefgdf7576ghfg4455456'

interface AuthPayload extends JwtPayload {
  cpf: string
  nome: string
  funcao: string // ou enum, conforme sua definição
}

export interface CustomRequest extends Request {
  token: AuthPayload
}

export default class GeneralMiddleware {
  public static validateCpf = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    let { cpf } = req.params
    if (GeneralValidator.validateCpf(cpf)) {
      next()
      return
    }
    res.status(400).json({
      error: 'Invalid CPF format. Please provide a valid CPF.',
    })
    return
  }
  public static validateUUID = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    let { cod } = req.params
    if (GeneralValidator.validateUUID(cod)) {
      next()
      return
    }
    res.status(400).json({
      error: 'Invalid UUID format. Please provide a valid UUID.',
    })
    return
  }

  public static errorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    console.error('Error:', error)

    // Trata erros de validação do Zod
    if (error instanceof z.ZodError) {
      console.error(`Validation error on ${req.method} resource:`, error.errors)
      res.status(400).json({
        error: 'Validation error',
        details: error.errors,
      })
      return
    }

    // Função auxiliar para capturar mensagens do Prisma
    const extractPrismaErrorMessage = (error: Error) => {
      const errorSplitted = error.message.split('\n')
      return errorSplitted[errorSplitted.length - 1] // Retorna a última linha do erro
    }

    // Trata erros do Prisma
    if (
      error instanceof Prisma.PrismaClientInitializationError ||
      error instanceof Prisma.PrismaClientKnownRequestError ||
      error instanceof Prisma.PrismaClientValidationError
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
      console.error(
        `Unexpected error on ${req.method} resource:`,
        error.message,
      )
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

  public static validateBodyRequest = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (req.method.toLocaleLowerCase() !== 'get') {
      if (!req.body || Object.keys(req.body).length === 0) {
        res.status(400).json({ message: 'Invalid requisition' })
        return
      }
    }
    next()
    return
  }

  public static authentication = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '')

      if (!token) {
        throw new Error()
      }

      const decoded = jwt.verify(token, SECRET_KEY) as AuthPayload
      ;(req as CustomRequest).token = decoded

      next()
    } catch (err) {
      res.status(401).send('Please authenticate')
      return
    }
  }

  public static authorizationGerente = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequest
    // Verifica se há token e se a função é "GERENTE"
    if (!token || token.funcao !== FuncaoEnum.Values.GERENTE) {
      res.status(403).json({ message: 'Access denied: gerente only' })
      return
    }
    next()
  }

  public static authorizationAlmoxarife = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequest
    // Verifica se há token e se a função é "ALMOXARIFE"
    if (!token || token.funcao !== FuncaoEnum.Values.ALMOXARIFE) {
      res.status(403).json({ message: 'Access denied: almoxarife only' })
      return
    }
    next()
  }

  public static authorizationAnalistaCadastro = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequest
    // Verifica se há token e se a função é "ANALISTA_CADASTRO"
    if (!token || token.funcao !== FuncaoEnum.Values.ANALISTA_CADASTRO) {
      res.status(403).json({ message: 'Access denied: analista cadastro only' })
      return
    }
    next()
  }

  public static authorizationAnalistaLocacao = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequest
    // Verifica se há token e se a função é "AGENTE_LOCACAO"
    if (!token || token.funcao !== FuncaoEnum.Values.AGENTE_LOCACAO) {
      res.status(403).json({ message: 'Access denied: agente locacao only' })
      return
    }
    next()
  }
  public static authorizationCaixa = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequest
    // Verifica se há token e se a função é "CAIXA"
    if (!token || token.funcao !== FuncaoEnum.Values.CAIXA) {
      res.status(403).json({ message: 'Access denied: caixa only' })
      return
    }
    next()
  }
}
