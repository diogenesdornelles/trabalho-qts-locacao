import { Request, Response, NextFunction } from 'express'
import GeneralValidator from '../validators/GeneralValidator'
import { Prisma } from '../../generated/prisma_client'
import jwt, { Secret, JwtPayload } from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { FuncaoEnum } from '../schemas/schemas'

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
  ): void | Response => {
    console.error('Error:', error)

    // Trata erros conhecidos do Prisma
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Exemplo: Violação de restrição de unicidade (código P2002)
      if (error.code === 'P2002') {
        res.status(409).json({
          message: 'Unique violation.',
          details: error.meta,
        })
        return
      }
      res.status(500).json({
        message: 'Database error.',
        details: error.message,
      })
      return
    }

    // Erros de validação do Prisma
    if (error instanceof Prisma.PrismaClientValidationError) {
      res.status(400).json({
        message: 'Prisma error validation.',
        details: error.message,
      })
      return
    }

    // Erros desconhecidos do Prisma
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      res.status(500).json({
        message: 'Unknow database error.',
        details: error.message,
      })
      return
    }

    // Outros erros genéricos
    res.status(error.status || 500).json({
      message: error.message || 'Internal Server Error',
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
  ) => {
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
  ) => {
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
  ) => {
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
  ) => {
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
  ) => {
    const { token } = req as CustomRequest
    // Verifica se há token e se a função é "ANALISTA_LOCACAO"
    if (!token || token.funcao !== FuncaoEnum.Values.ANALISTA_LOCACAO) {
      res.status(403).json({ message: 'Access denied: analista locacao only' })
      return
    }
    next()
  }
  public static authorizationCaixa = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { token } = req as CustomRequest
    // Verifica se há token e se a função é "ANALISTA_LOCACAO"
    if (!token || token.funcao !== FuncaoEnum.Values.CAIXA) {
      res.status(403).json({ message: 'Access denied: analista locacao only' })
      return
    }
    next()
  }
}
