import { Request } from 'express'
import { z } from 'zod'
import { LoginSchema } from '../schemas/schemas'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { BaseService } from './BaseService'
import { PrismaClient } from '../../generated/prisma_client'

dotenv.config()

export type TToken = {
  funcionario: {
    cpf: string
    nome: string
  }
  token: string
}

const SECRET_KEY = process.env.SECRET_KEY || 'r34534erfefgdf7576ghfg4455456'

export default class LoginServices extends BaseService<TToken> {
  constructor() {
    super(new PrismaClient())
  }

  public create = async (req: Request): Promise<TToken> => {
    try {
      // Valida os dados recebidos no corpo da requisição
      const validatedData = LoginSchema.parse(req.body)

      const dbFuncionario = await this.prisma.funcionario.findUnique({
        where: { cpf: validatedData.cpf },
      })

      if (!dbFuncionario) {
        throw new Error('Cpf of password is not correct')
      }

      const isMatch = bcrypt.compareSync(
        validatedData.senha,
        dbFuncionario.senha,
      )

      if (isMatch) {
        const token = jwt.sign(
          {
            cpf: dbFuncionario.cpf,
            nome: dbFuncionario.nome,
            funcao: dbFuncionario.funcao,
          },
          SECRET_KEY,
          {
            expiresIn: '2 days',
          },
        )

        return {
          funcionario: { cpf: dbFuncionario.cpf, nome: dbFuncionario.nome },
          token: token,
        }
      } else {
        throw new Error('Password is not correct')
      }
    } catch (error: unknown) {
      // Trata erros de validação do Zod
      if (error instanceof z.ZodError) {
        console.error('Validation error on create token:', error.errors)
        throw new Error(
          `Validation error: ${error.errors.map(err => err.message).join(', ')}`,
        )
      }
      throw new Error('An unknown error occurred while creating token.')
    }
  }

  public getAll(): Promise<TToken[]> {
    throw new Error('Method not implemented.')
  }
  public getOne(pk: string): Promise<TToken | null> {
    throw new Error('Method not implemented.')
  }
  public update(pk: string, req: Request): Promise<Partial<TToken>> {
    throw new Error('Method not implemented.')
  }
  public delete(pk: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
