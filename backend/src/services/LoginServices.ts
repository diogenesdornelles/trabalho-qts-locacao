import { z } from 'zod'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { BaseService } from './BaseService'
import { PrismaClient } from '../../generated/prisma_client'
import { TokenResponseDTO } from '../dtos/TokenResponseDTO'
import { CreateTokenDTO } from '../dtos/CreateTokenDTO'
import { UpdateTokenDTO } from '../dtos/UpdateTokenDTO'

dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY || 'r34534erfefgdf7576ghfg4455456'

export default class LoginServices extends BaseService<
  TokenResponseDTO,
  CreateTokenDTO,
  UpdateTokenDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public create = async (data: CreateTokenDTO): Promise<TokenResponseDTO> => {
    try {
      const dbFuncionario = await this.prisma.funcionario.findUnique({
        where: { cpf: data.cpf },
      })

      if (!dbFuncionario) {
        throw new Error('Cpf of password is not correct')
      }

      const isMatch = bcrypt.compareSync(data.senha, dbFuncionario.senha)

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

  public getAll(): Promise<TokenResponseDTO[]> {
    throw new Error('Method not implemented.')
  }
  public getOne(pk: string): Promise<TokenResponseDTO | null> {
    throw new Error('Method not implemented.')
  }
  public update(
    pk: string,
    data: UpdateTokenDTO,
  ): Promise<Partial<TokenResponseDTO>> {
    throw new Error('Method not implemented.')
  }
  public delete(pk: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
