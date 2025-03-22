import { PrismaClient } from '../../generated/prisma_client'

/**
 * Abstract base service class that provides a blueprint for standard CRUD operations.
 *
 * This class is designed to be extended by specific service classes that interact with
 * a database via the Prisma client. It defines a generic interface for operations such as
 * retrieving all records, fetching a single record, creating, updating, and deleting records.
 *
 * @template ResponseDTO - The data transfer object type returned from read operations.
 * @template CreateDTO - The data transfer object type used for creating a record.
 * @template UpdateDTO - The data transfer object type used for updating a record.
 */
export abstract class BaseService<ResponseDTO, CreateDTO, UpdateDTO> {
  // Prisma client instance used to perform database operations.
  protected prisma: PrismaClient;

  /**
   * Constructs a new BaseService instance.
   *
   * @param {PrismaClient} prisma - The Prisma client instance for interacting with the database.
   */
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  /**
   * Retrieves all records.
   *
   * @returns {Promise<ResponseDTO[]>} A promise that resolves to an array of records.
   */
  public abstract getAll(): Promise<ResponseDTO[]>;

  /**
   * Retrieves a single record by its primary key.
   *
   * @param {string} pk - The primary key of the record to retrieve.
   * @returns {Promise<ResponseDTO | null>} A promise that resolves to the record or null if not found.
   */
  public abstract getOne(pk: string): Promise<ResponseDTO | null>;

  /**
   * Creates a new record.
   *
   * @param {CreateDTO} data - The data required to create a new record.
   * @returns {Promise<ResponseDTO | null>} A promise that resolves to the newly created record or null.
   */
  public abstract create(data: CreateDTO): Promise<ResponseDTO | null>;

  /**
   * Updates an existing record.
   *
   * @param {string} pk - The primary key of the record to update.
   * @param {UpdateDTO} data - The data to update the record with.
   * @returns {Promise<Partial<ResponseDTO | null>>} A promise that resolves to a partial updated record or null.
   */
  public abstract update(
    pk: string,
    data: UpdateDTO,
  ): Promise<Partial<ResponseDTO | null>>;

  /**
   * Deletes a record by its primary key.
   *
   * @param {string} pk - The primary key of the record to delete.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating whether the deletion was successful.
   */
  public abstract delete(pk: string): Promise<boolean>;
}
