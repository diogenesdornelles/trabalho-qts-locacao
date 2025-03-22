"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
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
class BaseService {
    /**
     * Constructs a new BaseService instance.
     *
     * @param {PrismaClient} prisma - The Prisma client instance for interacting with the database.
     */
    constructor(prisma) {
        this.prisma = prisma;
    }
}
exports.BaseService = BaseService;
