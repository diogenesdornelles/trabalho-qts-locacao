import { PrismaClient, Funcao } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import hashPassword from '../utils/hashPwd.util'
import { ResponseFuncionarioDTO } from '../dtos/response/responseFuncionario.dto'
import { CreateFuncionarioDTO } from '../dtos/create/createFuncionario.dto'
import { UpdateFuncionarioDTO } from '../dtos/update/updateFuncionario.dto'

/**
 * Service for managing employees.
 *
 * @export
 * @class FuncionarioService
 * @extends {BaseService<ResponseFuncionarioDTO, CreateFuncionarioDTO, UpdateFuncionarioDTO>}
 */
export default class FuncionarioService extends BaseService<
  ResponseFuncionarioDTO,
  CreateFuncionarioDTO,
  UpdateFuncionarioDTO
> {
  /**
   * Creates an instance of FuncionarioService.
   * @memberof FuncionarioService
   */
  constructor() {
    super(new PrismaClient())
  }

  /**
   * Get all employees.
   *
   * @memberof FuncionarioService
   * @returns {Promise<ResponseFuncionarioDTO[]>} A list of employees.
   */
  public getAll = async (): Promise<ResponseFuncionarioDTO[]> => {
    return await this.prisma.funcionario.findMany({
      select: {
        cpf: true,
        nome: true,
        telefone: true,
        funcao: true,
        senha: false, // Password is excluded from the response
        ativo: true,
      },
    })
  }

  /**
   * Get one employee by CPF.
   *
   * @param {string} pk - The CPF of the employee.
   * @returns {Promise<ResponseFuncionarioDTO | null>} The employee or null if not found.
   */
  public getOne = async (
    pk: string,
  ): Promise<ResponseFuncionarioDTO | null> => {
    return await this.prisma.funcionario.findUnique({
      where: { cpf: pk },
      select: {
        cpf: true,
        nome: true,
        telefone: true,
        funcao: true,
        senha: false, // Password is excluded from the response
        ativo: true,
      },
    })
  }

  /**
   * Create a new employee.
   *
   * @param {CreateFuncionarioDTO} data - The data for the new employee.
   * @returns {Promise<ResponseFuncionarioDTO>} The created employee.
   */
  public create = async (
    data: CreateFuncionarioDTO,
  ): Promise<ResponseFuncionarioDTO> => {
    // Hash the password before saving it to the database
    data.senha = await hashPassword(data.senha)

    // Save the new employee using Prisma's create method
    const createdFuncionario = await this.prisma.funcionario.create({
      data: {
        ...data,
        funcao: data.funcao as Funcao,
      },
    })

    // Exclude the password from the response
    createdFuncionario.senha = ''
    return {
      cpf: createdFuncionario.cpf,
      nome: createdFuncionario.nome,
      telefone: createdFuncionario.telefone,
      funcao: createdFuncionario.funcao,
      ativo: createdFuncionario.ativo,
    }
  }

  /**
   * Update an employee by CPF.
   *
   * @param {string} pk - The CPF of the employee.
   * @param {UpdateFuncionarioDTO} data - The data to update the employee.
   * @returns {Promise<Partial<ResponseFuncionarioDTO>>} The updated employee.
   */
  public update = async (
    pk: string,
    data: UpdateFuncionarioDTO,
  ): Promise<Partial<ResponseFuncionarioDTO>> => {
    // Hash the password if it is being updated
    if (data.senha) {
      data.senha = await hashPassword(data.senha)
    }

    // Update the employee using Prisma's update method
    const updatedFuncionario = await this.prisma.funcionario.update({
      where: { cpf: pk },
      data: {
        ...data,
        funcao: data.funcao as Funcao,
      },
    })

    return {
      cpf: updatedFuncionario.cpf,
      nome: updatedFuncionario.nome,
      telefone: updatedFuncionario.telefone,
      funcao: updatedFuncionario.funcao,
    }
  }

  /**
   * Delete an employee by CPF.
   *
   * @param {string} pk - The CPF of the employee.
   * @returns {Promise<boolean>} True if the employee was deleted, false otherwise.
   */
  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.funcionario.delete({
        where: { cpf: pk, ativo: true },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
