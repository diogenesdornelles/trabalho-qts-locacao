import { PrismaClient, Funcao } from '../../generated/prisma_client'
import { BaseService } from './BaseService'
import hashPassword from '../utils/hashPwd'
import { FuncionarioResponseDTO } from '../dtos/response/FuncionarioResponseDTO'
import { CreateFuncionarioDTO } from '../dtos/create/CreateFuncionarioDTO'
import { UpdateFuncionarioDTO } from '../dtos/update/UpdateFuncionarioDTO'

export default class FuncionarioServices extends BaseService<
  FuncionarioResponseDTO,
  CreateFuncionarioDTO,
  UpdateFuncionarioDTO
> {
  constructor() {
    super(new PrismaClient())
  }
  public getAll = async (): Promise<FuncionarioResponseDTO[]> => {
    return await this.prisma.funcionario.findMany({
      select: {
        cpf: true,
        nome: true,
        telefone: true,
        funcao: true,
        senha: false,
      },
    })
  }

  public getOne = async (
    pk: string,
  ): Promise<FuncionarioResponseDTO | null> => {
    return await this.prisma.funcionario.findUnique({
      where: { cpf: pk },
      select: {
        cpf: true,
        nome: true,
        telefone: true,
        funcao: true,
        senha: false,
      },
    })
  }

  public create = async (
    data: CreateFuncionarioDTO,
  ): Promise<FuncionarioResponseDTO> => {
    // tornar oculto o pwd no bd
    data.senha = await hashPassword(data.senha)

    // Salva o novo funcionário utilizando o método create do Prisma
    const createdFuncionario = await this.prisma.funcionario.create({
      data: {
        ...data,
        funcao: data.funcao as Funcao,
      },
    })
    createdFuncionario.senha = ""
    return {
      cpf: createdFuncionario.cpf,
      nome: createdFuncionario.nome,
      telefone: createdFuncionario.telefone,
      funcao: createdFuncionario.funcao,

    }
  }

  public update = async (
    pk: string,
    data: UpdateFuncionarioDTO,
  ): Promise<Partial<FuncionarioResponseDTO>> => {
    if (data.senha) {
      data.senha = await hashPassword(data.senha)
    }

    // Atualiza o funcionário utilizando o método update do Prisma
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

  public delete = async (pk: string): Promise<boolean> => {
    try {
      await this.prisma.funcionario.delete({
        where: { cpf: pk },
      })
      return true
    } catch (error: unknown) {
      return false
    }
  }
}
