import { PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './base.service'
import { ResponseLocacaoDTO } from '../dtos/response/response-locacao.dto'
import { ResponseLocacaoComBrinquedosDTO } from '../dtos/response/response-locacao-com-brinquedos.dto'
import { CreateLocacaoDTO } from '../dtos/create/create-locacao.dto'
import { UpdateLocacaoDTO } from '../dtos/update/update-locacao.dto'

export default class LocacaoServices extends BaseService<
  ResponseLocacaoDTO,
  CreateLocacaoDTO,
  UpdateLocacaoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<ResponseLocacaoDTO[]> => {
    return await this.prisma.locacao.findMany()
  }

  public getTotalValue = async (pk: string): Promise<number> => {
    // Initializa variable with 0 value
    let totalValorUnitario = 0.0
    // Get rental by pk
    const locacao = await this.getOne(pk)
    // if there is a rental and there is at least 1 item
    if (locacao && locacao.brinquedosLocados.length > 0) {
      totalValorUnitario = locacao.brinquedosLocados.reduce(
        (total, brinquedo) => {
          // Converts unit_value to number if necessary. Only add if toy is active
          return brinquedo.ativo ? total + Number(brinquedo.valor_unitario) : total
        },
        0,
      )
    }
    return totalValorUnitario
  }

  public getOne = async (
    pk: string,
  ): Promise<ResponseLocacaoComBrinquedosDTO | null> => {
    return await this.prisma.locacao.findUnique({
      where: { cod: pk },
      include: {
        brinquedosLocados: true, // consulta populada: nome usado no prisma schema
      },
    })
  }

  public create = async (
    data: CreateLocacaoDTO,
  ): Promise<ResponseLocacaoDTO> => {
    const createdLocacao = await this.prisma.locacao.create({ data })
    return createdLocacao
  }

  public update = async (
    pk: string,
    data: UpdateLocacaoDTO,
  ): Promise<ResponseLocacaoDTO> => {
    throw new Error('Method not implemented.')
  }

  public delete = async (pk: string): Promise<boolean> => {
    throw new Error('Method not implemented.')
  }
}
