import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { BaseService } from './base.service'
import { PrismaClient } from '../../generated/prisma_client'
import { ResponseTokenDTO } from '../dtos/response/responseToken.dto'
import { CreateTokenDTO } from '../dtos/create/createToken.dto'
import { UpdateTokenDTO } from '../dtos/update/updateToken.dto'
import ms from 'ms'
import { ApiError } from '../utils/apiError.util'

dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY || 'r34534erfefgdf7576ghfg4455456'
const EXPIRES_IN = process.env.EXPIRES_IN || '2d'

/**
 * Service for managing login and token creation.
 *
 * @export
 * @class LoginService
 * @extends {BaseService<ResponseTokenDTO, CreateTokenDTO, UpdateTokenDTO>}
 */
export default class LoginService extends BaseService<
  ResponseTokenDTO,
  CreateTokenDTO,
  UpdateTokenDTO
> {
  /**
   * Creates an instance of LoginService.
   * @memberof LoginService
   */
  constructor() {
    super(new PrismaClient())
  }

  /**
   * Create a new login token.
   *
   * @param {CreateTokenDTO} data - The login credentials (CPF and password).
   * @returns {Promise<ResponseTokenDTO>} The generated token and employee details.
   * @throws {ApiError} If the CPF is not found, the employee is inactive, or the password is incorrect.
   */
  public create = async (data: CreateTokenDTO): Promise<ResponseTokenDTO> => {
    // Find employee by CPF and check if active
    const empDB = await this.prisma.funcionario.findUnique({
      where: { cpf: data.cpf, ativo: true },
    })

    // If employee not found or inactive, throw an error
    if (!empDB) {
      throw new ApiError(400, 'CPF not found or is not correct')
    }

    // Compare encrypted passwords
    const isMatch = bcrypt.compareSync(data.senha, empDB.senha)

    // If passwords match, generate a token
    if (isMatch) {
      const token = jwt.sign(
        {
          cpf: empDB.cpf,
          nome: empDB.nome,
          funcao: empDB.funcao,
        },
        SECRET_KEY,
        {
          expiresIn: EXPIRES_IN as ms.StringValue,
        },
      )

      // Return the token and employee details
      return {
        funcionario: {
          cpf: empDB.cpf,
          nome: empDB.nome,
          funcao: empDB.funcao,
        },
        token: token,
      }
    } else {
      // If passwords do not match, throw an error
      throw new ApiError(400, 'Password is not correct')
    }
  }

  /**
   * Get all tokens.
   *
   * @memberof LoginService
   * @returns {Promise<ResponseTokenDTO[]>} A list of tokens.
   * @throws {Error} Method not implemented.
   */
  public getAll(): Promise<ResponseTokenDTO[]> {
    throw new Error('Method not implemented.')
  }

  /**
   * Get one token by identifier.
   *
   * @param {string} pk - The identifier of the token.
   * @returns {Promise<ResponseTokenDTO | null>} The token or null if not found.
   * @throws {Error} Method not implemented.
   */
  public getOne(pk: string): Promise<ResponseTokenDTO | null> {
    throw new Error('Method not implemented.')
  }

  /**
   * Update a token by identifier.
   *
   * @param {string} pk - The identifier of the token.
   * @param {UpdateTokenDTO} data - The data to update the token.
   * @returns {Promise<Partial<ResponseTokenDTO>>} The updated token.
   * @throws {Error} Method not implemented.
   */
  public update(
    pk: string,
    data: UpdateTokenDTO,
  ): Promise<Partial<ResponseTokenDTO>> {
    throw new Error('Method not implemented.')
  }

  /**
   * Delete a token by identifier.
   *
   * @param {string} pk - The identifier of the token.
   * @returns {Promise<boolean>} True if the token was deleted, false otherwise.
   * @throws {Error} Method not implemented.
   */
  public delete(pk: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
