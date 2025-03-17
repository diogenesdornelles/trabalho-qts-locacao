import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { BaseService } from './BaseService'
import { PrismaClient } from '../../generated/prisma_client'
import { TokenResponseDTO } from '../dtos/response/TokenResponseDTO'
import { CreateTokenDTO } from '../dtos/create/CreateTokenDTO'
import { UpdateTokenDTO } from '../dtos/update/UpdateTokenDTO'
import ms from 'ms'

dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY || 'r34534erfefgdf7576ghfg4455456'
const EXPIRES_IN = process.env.EXPIRES_IN || '2d'

export default class LoginServices extends BaseService<
  TokenResponseDTO,
  CreateTokenDTO,
  UpdateTokenDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public create = async (data: CreateTokenDTO): Promise<TokenResponseDTO> => {
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
          expiresIn: EXPIRES_IN as ms.StringValue,
        },
      )

      return {
        funcionario: {
          cpf: dbFuncionario.cpf,
          nome: dbFuncionario.nome,
          funcao: dbFuncionario.funcao,
        },
        token: token,
      }
    } else {
      throw new Error('Password is not correct')
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
