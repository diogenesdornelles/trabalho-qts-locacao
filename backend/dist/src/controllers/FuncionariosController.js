'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const FuncionarioServices_1 = __importDefault(
  require('../services/FuncionarioServices'),
)
const BaseController_1 = require('./BaseController')
const CreateFuncionarioValidator_1 = require('../validators/CreateFuncionarioValidator')
const UpdateFuncionarioValidator_1 = require('../validators/UpdateFuncionarioValidator')
class FuncionariosController extends BaseController_1.BaseController {
  constructor() {
    super(new FuncionarioServices_1.default())
    this.getAll = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const funcionarios = yield this.service.getAll()
          res.status(200).json(funcionarios)
          return
        } catch (error) {
          next(error)
          return
        }
      })
    this.getOne = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const { cpf } = req.params
          const funcionario = yield this.service.getOne(cpf)
          if (!funcionario) {
            res.status(404).json({ message: 'Employee not found' })
            return
          }
          res.status(200).json(funcionario)
          return
        } catch (error) {
          next(error)
          return
        }
      })
    this.create = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const validatedData =
            CreateFuncionarioValidator_1.CreateFuncionarioValidator.parse(
              req.body,
            )
          const funcionario = yield this.service.create(validatedData)
          res.status(201).json(funcionario)
          return
        } catch (error) {
          next(error)
          return
        }
      })
    this.update = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const { cpf } = req.params
          const validatedData =
            UpdateFuncionarioValidator_1.UpdateFuncionarioValidator.parse(
              req.body,
            )
          const updatedFuncionario = yield this.service.update(
            cpf,
            validatedData,
          )
          if (!updatedFuncionario) {
            res.status(404).json({ message: 'Employee not found' })
            return
          }
          res.status(200).json(updatedFuncionario)
          return
        } catch (error) {
          next(error)
          return
        }
      })
    this.delete = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const { cpf } = req.params
          const success = yield this.service.delete(cpf)
          if (!success) {
            res.status(404).json({ message: 'Employee not found' })
            return
          }
          res.status(200).json({ message: 'Employee deleted!' })
          return
        } catch (error) {
          next(error)
          return
        }
      })
  }
}
exports.default = FuncionariosController
