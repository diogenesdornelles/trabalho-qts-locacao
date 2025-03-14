import { Pagamento, PrismaClient } from '../../generated/prisma_client'
import { BaseService } from './BaseService'
import LocacaoServices from './LocacaoServices'
import { PagamentoResponseDTO } from '../dtos/response/PagamentoResponseDTO'
import { CreatePagamentoDTO } from '../dtos/create/CreatePagamentoDTO'
import { UpdatePagamentoDTO } from '../dtos/update/UpdatePagamentoDTO'

export default class PagamentoServices extends BaseService<
  PagamentoResponseDTO,
  CreatePagamentoDTO,
  UpdatePagamentoDTO
> {
  constructor() {
    super(new PrismaClient())
  }

  public getAll = async (): Promise<Pagamento[]> => {
    return await this.prisma.pagamento.findMany()
  }

  public getOne = async (pk: string): Promise<PagamentoResponseDTO | null> => {
    return await this.prisma.pagamento.findUnique({
      where: { cod: pk },
      include: {
        locacao: true, // consulta populada: nome usaso no prisma schema
      },
    })
  }

  public create = async (
    data: CreatePagamentoDTO,
  ): Promise<PagamentoResponseDTO> => {
    // É preciso atualizar valor total, através da locação e seus respectivos itens locados
    const locacaoService = new LocacaoServices()
    const totalValue = await locacaoService.getTotalValue(data.cod_locacao)
    // Salva o novo pagamento utilizando o método create do Prisma
    const createdPagamento = await this.prisma.pagamento.create({
      data: { ...data, valor_locacao: totalValue },
    })

    return createdPagamento
  }

  public update = async (
    pk: string,
    data: UpdatePagamentoDTO,
  ): Promise<PagamentoResponseDTO> => {
    throw new Error('Method not implemented.')
  }

  public delete = async (pk: string): Promise<boolean> => {
    throw new Error('Method not implemented.')
  }
}
