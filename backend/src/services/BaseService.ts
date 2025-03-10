import { PrismaClient } from '../../generated/prisma_client'
import { Request } from 'express'

export abstract class BaseService<T extends Record<string, any>> {
  protected prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  public abstract getAll(): Promise<T[]>
  public abstract getOne(pk: string): Promise<T | null>
  public abstract create(req: Request): Promise<T>
  public abstract update(pk: string, req: Request): Promise<Partial<T>>
  public abstract delete(pk: string): Promise<boolean>
}
