import { Request, Response, NextFunction } from 'express'
import ClienteServices from '../services/ClienteServices'
import { BaseController } from './BaseController'

export default class ClientesController extends BaseController<ClienteServices> {
  constructor() {
    super(new ClienteServices())
  }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const clientes = await this.service.getAll()
      res.status(200).json(clientes)
      return
    } catch (error) {
      next(error)
      return
    }
  }

  public getOne = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { cpf } = req.params
      const book = await this.service.getOne(cpf)
      if (!book) {
        res.status(404).json({ message: 'Customer not found' })
        return
      }
      res.status(200).json(book)
      return
    } catch (error) {
      next(error)
      return
    }
  }

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const cliente = await this.service.create(req)
      res.status(201).json(cliente)
      return
    } catch (error) {
      next(error)
      return
    }
  }

  public update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { cpf } = req.params
      const updatedCliente = await this.service.update(cpf, req)
      if (!updatedCliente) {
        res.status(404).json({ message: 'Customer not found' })
        return
      }
      res.status(200).json(updatedCliente)
      return
    } catch (error) {
      next(error)
      return
    }
  }
  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    throw new Error('Method not implemented.')
  }
}
