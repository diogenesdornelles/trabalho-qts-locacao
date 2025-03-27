'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.BaseController = void 0
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
class BaseController {
  /**
   * Creates an instance of BaseController.
   *
   * @param {T} service - The service instance responsible for business logic.
   * @param {DTOValidator} validator - The DTO validator instance.
   */
  constructor(service, validator) {
    this.service = service
    this.validator = validator
  }
}
exports.BaseController = BaseController
