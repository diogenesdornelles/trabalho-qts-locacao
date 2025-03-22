import { Request, Response, NextFunction } from 'express';
import { BaseService } from '../services/base.service';
import DTOValidator from '../validators/dto.validator';

/**
 * Abstract base controller class.
 *
 * This class provides the foundational structure for controllers in the application.
 * It expects a service instance to handle business logic and a DTO validator for validating
 * data transfer objects. Subclasses must implement the abstract methods to handle
 * CRUD operations.
 *
 * @template T - The type of the service, which must extend BaseService with generic types.
 */
export abstract class BaseController<
  T extends BaseService<
    Record<string, any>,
    Record<string, any>,
    Record<string, any>
  >,
> {
  // The service instance used for business logic operations.
  public service: T;
  // The validator used to validate data transfer objects (DTOs).
  public validator: DTOValidator;

  /**
   * Creates an instance of BaseController.
   *
   * @param {T} service - The service instance responsible for business logic.
   * @param {DTOValidator} validator - The DTO validator instance.
   */
  constructor(service: T, validator: DTOValidator) {
    this.service = service;
    this.validator = validator;
  }

  /**
   * Retrieves all records.
   *
   * Subclasses must implement this method to handle retrieving all records.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   * @returns {Promise<void>}
   */
  public abstract getAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void>;

  /**
   * Retrieves a single record.
   *
   * Subclasses must implement this method to handle retrieving a single record.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   * @returns {Promise<void>}
   */
  public abstract getOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void>;

  /**
   * Creates a new record.
   *
   * Subclasses must implement this method to handle the creation of a new record.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   * @returns {Promise<void>}
   */
  public abstract create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void>;

  /**
   * Updates an existing record.
   *
   * Subclasses must implement this method to handle updating a record.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   * @returns {Promise<void>}
   */
  public abstract update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void>;

  /**
   * Deletes a record.
   *
   * Subclasses must implement this method to handle the deletion of a record.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   * @returns {Promise<void>}
   */
  public abstract delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void>;
}
