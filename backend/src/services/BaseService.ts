import { PrismaClient } from '../../generated/prisma_client'

export abstract class BaseService<
  ResponseDTO,
  CreateDTO,
  UpdateDTO,
> {
  protected prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  public abstract getAll(): Promise<ResponseDTO[]>
  public abstract getOne(pk: string): Promise<ResponseDTO | null>
  public abstract create(data: CreateDTO): Promise<ResponseDTO>
  public abstract update(pk: string, data: UpdateDTO): Promise<Partial<ResponseDTO>>
  public abstract delete(pk: string): Promise<boolean>
}
