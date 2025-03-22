import { Request, Response, NextFunction } from 'express'
import ClienteServices from '../services/ClienteServices'
import { BaseController } from './BaseController'
import { ClienteResponseDTO } from '../dtos/response/ClienteResponseDTO'
import { CreateClienteDTO } from '../dtos/create/CreateClienteDTO'
import DTOValidator from '../validators/DTOValidator'
import { UpdateClienteDTO } from '../dtos/update/UpdateClienteDTO'

export default class ClientesController extends BaseController<ClienteServices> {
  constructor() {
    super(new ClienteServices(), new DTOValidator())
  }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const clientes: ClienteResponseDTO[] = await this.service.getAll()
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
      const book: ClienteResponseDTO | null = await this.service.getOne(cpf)
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
      const validatedData: CreateClienteDTO =
        this.validator.createCliente<CreateClienteDTO>(req.body)
      const cliente: ClienteResponseDTO =
        await this.service.create(validatedData)
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
      const validatedData: UpdateClienteDTO =
        this.validator.updateCliente<UpdateClienteDTO>(req.body)
      const updatedCliente: Partial<ClienteResponseDTO> =
        await this.service.update(cpf, validatedData)
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
