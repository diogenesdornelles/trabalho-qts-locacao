import { Request, Response, NextFunction } from 'express'
import GeneralValidator from '../validators/general.validator'
import { Prisma } from '../../generated/prisma_client'
import jwt, { Secret } from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { Funcao } from '../../generated/prisma_client'
import { z } from 'zod'
import { ApiError } from '../utils/apiError.util'
import { AuthPayloadInterface } from '../interfaces/authPayload.interface'
import { CustomRequestInterface } from '../interfaces/customRequest.interface'

// Load environment variables from .env file
dotenv.config()

// Set the secret key for JWT; fallback provided if not set in the environment
const SECRET_KEY: Secret =
  process.env.SECRET_KEY || 'r34534erfefgdf7576ghfg4455456'

/**
 * GeneralMiddleware contains various middleware functions for validation,
 * error handling, authentication, and authorization.
 */
export default class GeneralMiddleware {
  /**
   * Middleware to validate CPF format in the request parameters.
   *
   * Extracts the 'cpf' parameter and uses GeneralValidator to verify its format.
   * If the CPF is valid, it calls next(); otherwise, it sends a 400 response.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static validateCpf = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    // Extract the 'cpf' parameter from the request
    let { cpf } = req.params
    // If the cpf is valid, call next function in flow
    if (GeneralValidator.validateCpf(cpf)) {
      next()
      return
    }
    // If the cpf is not valid, send a 400 response with an error message
    res.status(400).json({
      error: 'Invalid CPF format. Please provide a valid CPF.',
    })
    return
  }

  /**
   * Middleware to validate UUID format in the request parameters.
   *
   * Extracts the 'cod' parameter and uses GeneralValidator to verify its UUID format.
   * If the UUID is valid, it calls next(); otherwise, it sends a 400 response.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static validateUUID = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    // Extract the 'cod' parameter from the request
    let { cod } = req.params
    // If the cod is valid, call next function in flow
    if (GeneralValidator.validateUUID(cod)) {
      next()
      return
    }
    // If the code is not valid, send a 400 response with an error message
    res.status(400).json({
      error: 'Invalid UUID format. Please provide a valid UUID.',
    })
    return
  }

  /**
   * Global error handling middleware.
   *
   * This function logs errors and sends appropriate responses based on error type.
   * It handles Zod validation errors, Prisma errors, custom API errors, and generic errors.
   *
   * @param {any} error - The error thrown.
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static errorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    console.error('Error:', error)

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      console.error(`Validation error on ${req.method} resource:`, error.errors)
      res.status(400).json({
        error: 'Validation error',
        details: error.errors,
      })
      return
    }

    // Helper function to extract the final error message from a Prisma error
    const extractPrismaErrorMessage = (error: Error) => {
      const errorSplitted = error.message.split('\n')
      return errorSplitted[errorSplitted.length - 1] // Return the last line of the error message
    }

    // Handle Prisma errors
    if (
      error instanceof Prisma.PrismaClientInitializationError ||
      error instanceof Prisma.PrismaClientKnownRequestError ||
      error instanceof Prisma.PrismaClientValidationError
    ) {
      const errorMessage = extractPrismaErrorMessage(error)
      console.error(`Database error on ${req.method} resource:`, error.message)
      res.status(500).json({
        error: 'Database error',
        details: errorMessage,
      })
      return
    }

    // Handle custom API errors
    if (error instanceof ApiError) {
      console.error(
        `Unexpected error on ${req.method} resource:`,
        error.message,
      )
      res.status(error.statusCode).json({
        error: error.message,
        details: error.message,
      })
      return
    }

    // Handle generic errors
    if (error instanceof Error) {
      console.error(
        `Unexpected error on ${req.method} resource:`,
        error.message,
      )
      res.status(500).json({
        error: 'Internal server error',
        details: error.message,
      })
      return
    }

    // If none of the above error types match, return a generic error response
    console.error('An unknown error occurred:', error)
    res.status(500).json({
      error: 'Unknown error',
      details: 'An unexpected error occurred while processing the request.',
    })
    return
  }

  /**
   * Middleware to validate that the request body is not empty for non-GET requests.
   *
   * If the request method is not GET and the body is empty, it sends a 400 response.
   * Otherwise, it passes control to the next middleware.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static validateBodyRequest = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    // Check if the request method is not GET. Otherwise, skip validation
    if (req.method.toLocaleLowerCase() !== 'get') {
      // If there is no body or the body is empty (no keys), send a 400 response
      if (!req.body || Object.keys(req.body).length === 0) {
        res.status(400).json({ message: 'Invalid requisition' })
        return
      }
    }
    // Calls next function in flow
    next()
    return
  }

  /**
   * Authentication middleware to verify the JWT token in the request header.
   *
   * Extracts the token from the 'Authorization' header, verifies it using the SECRET_KEY,
   * and attaches the decoded token payload to the request. If verification fails, it sends
   * a 401 response.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static authentication = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    try {
      // Extract the token from the Authorization header (removing the 'Bearer ' prefix)
      const token = req.header('Authorization')?.replace('Bearer ', '')
      // If no token in found, throw as error
      if (!token) {
        throw new Error('Token not found')
      }

      // Verify the token and cast the payload to AuthPayloadInterface
      const decoded = jwt.verify(token, SECRET_KEY) as AuthPayloadInterface
      // Insert the decoded token into the req. object
      ;(req as unknown as CustomRequestInterface).token = decoded
      // Calls next function in flow
      next()
    } catch (err) {
      // If token is invalid or expired, send a 401 response
      res.status(401).send('Please authenticate')
      return
    }
  }

  /**
   * Authorization middleware to restrict access to users with the 'GERENTE' role.
   *
   * Checks the token attached to the request and ensures the function is 'GERENTE'.
   * If not, it returns a 403 response.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static authorizationFuncionarios = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequestInterface
    // Check if token exists and if the user's role is 'GERENTE'
    if (!token || token.funcao !== Funcao.GERENTE) {
      // If not authorized, send a 403 response 'Unauthorized'
      res.status(403).json({ message: 'Access denied: gerente only' })
      return
    }
    next()
  }

  /**
   * Authorization middleware to restrict access to users with the 'ALMOXARIFE' role.
   *
   * Checks the token attached to the request and ensures the function is 'ALMOXARIFE'.
   * If not, it returns a 403 response.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static authorizationBrinquedos = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequestInterface
    // Check if token exists and if the user's role is 'ALMOXARIFE'
    if (!token || token.funcao !== Funcao.ALMOXARIFE) {
      // If not authorized, send a 403 response 'Unauthorized'
      res.status(403).json({ message: 'Access denied: almoxarife only' })
      return
    }
    next()
  }

  /**
   * Authorization middleware to restrict access to users with the 'ALMOXARIFE' role.
   *
   * Checks the token attached to the request and ensures the function is 'ALMOXARIFE'.
   * If not, it returns a 403 response.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static authorizationTiposBrinquedos = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequestInterface
    // Check if token exists and if the user's role is 'ALMOXARIFE'.
    if (!token || token.funcao !== Funcao.ALMOXARIFE) {
      // If not authorized, send a 403 response 'Unauthorized'
      res.status(403).json({ message: 'Access denied: almoxarife only' })
      return
    }
    next()
  }

  /**
   * Authorization middleware to restrict access to users with the 'ANALISTA_CADASTRO' role.
   *
   * Checks the token attached to the request and ensures the function is 'ANALISTA_CADASTRO'.
   * If not, it returns a 403 response.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static authorizationClientes = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequestInterface
    // Check if token exists and if the user's role is 'ANALISTA_CADASTRO'
    if (!token || token.funcao !== Funcao.ANALISTA_CADASTRO) {
      // If not authorized, send a 403 response 'Unauthorized'
      res
        .status(403)
        .json({ message: 'Access denied: analista cadastro  only' })
      return
    }
    next()
  }

  /**
   * Authorization middleware to restrict access to users with the 'AGENTE_LOCACAO'  role.
   *
   * Checks the token attached to the request and ensures the function is 'AGENTE_LOCACAO'.
   * If not, it returns a 403 response.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static authorizationLocacoes = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequestInterface
    // Check if token exists and if the user's role is 'AGENTE_LOCACAO'
    if (!token || token.funcao !== Funcao.AGENTE_LOCACAO) {
      // If not authorized, send a 403 response 'Unauthorized'
      res.status(403).json({ message: 'Access denied: agente locacao only' })
      return
    }
    next()
  }

  /**
   * Authorization middleware to restrict access to users with the 'AGENTE_LOCACAO' role.
   *
   * Checks the token attached to the request and ensures the function is 'AGENTE_LOCACAO'.
   * If not, it returns a 403 response.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static authorizationBrinquedosLocados = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequestInterface
    // Check if token exists and if the user's role is 'AGENTE_LOCACAO'
    if (!token || token.funcao !== Funcao.AGENTE_LOCACAO) {
      // If not authorized, send a 403 response 'Unauthorized'
      res.status(403).json({ message: 'Access denied: agente locacao only' })
      return
    }
    next()
  }

  /**
   * Authorization middleware to restrict access to users with the 'CAIXA' role.
   *
   * Checks the token attached to the request and ensures the function is 'CAIXA'.
   * If not, it returns a 403 response.
   *
   * @param {Request} req - The Express Request object.
   * @param {Response} res - The Express Response object.
   * @param {NextFunction} next - The next middleware function.
   */
  public static authorizationPagamentos = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const { token } = req as CustomRequestInterface
    // Check if token exists and if the user's role is 'CAIXA'
    if (!token || token.funcao !== Funcao.CAIXA) {
      // If not authorized, send a 403 response 'Unauthorized'
      res.status(403).json({ message: 'Access denied: caixa only' })
      return
    }
    next()
  }
}
