import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './BaseService'
import { LocacaoResponseDTO } from '../dtos/response/LocacaoResponseDTO'
import { LocacaoResponseComBrinquedosDTO } from '../dtos/response/LocacaoResponseComBrinquedosDTO'
import { CreateLocacaoDTO } from '../dtos/create/CreateLocacaoDTO'
import { UpdateLocacaoDTO } from '../dtos/update/UpdateLocacaoDTO'

export default class LocacaoServices extends BaseService<
  LocacaoResponseDTO,
  CreateLocacaoDTO,
  UpdateLocacaoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<LocacaoResponseDTO[]> => {
    return await this.prisma.locacao.findMany()
  }

  public getTotalValue = async (pk: string): Promise<number> => {
    let totalValorUnitario = 0.0
    const locacao = await this.getOne(pk)
    if (locacao && locacao.brinquedosLocados.length > 0) {
      totalValorUnitario = locacao.brinquedosLocados.reduce(
        (total, brinquedo) => {
          // Converte o valor_unitario para número, se necessário
          return total + Number(brinquedo.valor_unitario)
        },
        0,
      )
    }
    return totalValorUnitario
  }

  public getOne = async (
    pk: string,
  ): Promise<LocacaoResponseComBrinquedosDTO | null> => {
    return await this.prisma.locacao.findUnique({
      where: { cod: pk },
      include: {
        brinquedosLocados: true, // consulta populada: nome usaso no prisma schema
      },
    })
  }

  public create = async (
    data: CreateLocacaoDTO,
  ): Promise<LocacaoResponseDTO> => {
    const createdLocacao = await this.prisma.locacao.create({ data })
    return createdLocacao
  }

  public update = async (
    pk: string,
    data: UpdateLocacaoDTO,
  ): Promise<LocacaoResponseDTO> => {
    throw new Error('Method not implemented.')
  }

  public delete = async (pk: string): Promise<boolean> => {
    throw new Error('Method not implemented.')
  }
}
