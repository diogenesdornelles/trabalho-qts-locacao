import { Request, Response, NextFunction } from 'express'
import GeneralValidator from '../validators/GeneralValidator'
import { Prisma } from '../../generated/prisma_client'

export default class GeneralMiddleware {
  public static validateCpf = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    let { cpf } = req.params
    if (GeneralValidator.validateCpf(cpf)) next()
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
    if (GeneralValidator.validateUUID(cod)) next()
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
        return res.status(409).json({
          message: 'Unique violation.',
          details: error.meta,
        })
      }
      return res.status(500).json({
        message: 'Database error.',
        details: error.message,
      })
    }

    // Erros de validação do Prisma
    if (error instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({
        message: 'Prisma error validation.',
        details: error.message,
      })
    }

    // Erros desconhecidos do Prisma
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      return res.status(500).json({
        message: 'Unknow database error.',
        details: error.message,
      })
    }

    // Outros erros genéricos
    return res.status(error.status || 500).json({
      message: error.message || 'Internal Server Error',
    })
  }

  public static validateBodyRequest = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (req.method.toLocaleLowerCase() !== 'get') {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: 'Invalid requisition' })
      }
    }
    next()
  }
}
