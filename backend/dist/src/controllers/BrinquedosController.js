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
const BrinquedoServices_1 = __importDefault(
  require('../services/BrinquedoServices'),
)
const BaseController_1 = require('./BaseController')
const CreateBrinquedoValidator_1 = require('../validators/CreateBrinquedoValidator')
const UpdateBrinquedoValidator_1 = require('../validators/UpdateBrinquedoValidator')
class BrinquedosController extends BaseController_1.BaseController {
  constructor() {
    super(new BrinquedoServices_1.default())
    this.getAll = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const brinquedos = yield this.service.getAll()
          res.status(200).json(brinquedos)
          return
        } catch (error) {
          next(error)
          return
        }
      })
    this.getOne = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const { cod } = req.params
          const brinquedo = yield this.service.getOne(cod)
          if (!brinquedo) {
            res.status(404).json({ message: 'Toy not found' })
            return
          }
          res.status(200).json(brinquedo)
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
            CreateBrinquedoValidator_1.CreateBrinquedoValidator.parse(req.body)
          const brinquedo = yield this.service.create(validatedData)
          res.status(201).json(brinquedo)
          return
        } catch (error) {
          next(error)
          return
        }
      })
    this.update = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const { cod } = req.params
          const validatedData =
            UpdateBrinquedoValidator_1.UpdateBrinquedoValidator.parse(req.body)
          const updatedBrinquedo = yield this.service.update(cod, validatedData)
          if (!updatedBrinquedo) {
            res.status(404).json({ message: 'Toy not found' })
            return
          }
          res.status(200).json(updatedBrinquedo)
          return
        } catch (error) {
          next(error)
          return
        }
      })
    this.delete = (req, res, next) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          const { cod } = req.params
          const success = yield this.service.delete(cod)
          if (!success) {
            res.status(404).json({ message: 'Toy not found' })
            return
          }
          res.status(200).json({ message: 'Toy deleted!' })
          return
        } catch (error) {
          next(error)
          return
        }
      })
  }
}
exports.default = BrinquedosController
