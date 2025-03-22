"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tipo_brinquedo_services_1 = __importDefault(require("../services/tipo-brinquedo.services"));
const base_controller_1 = require("./base.controller");
const dto_validator_1 = __importDefault(require("../validators/dto.validator"));
class TiposBrinquedosController extends base_controller_1.BaseController {
    constructor() {
        super(new tipo_brinquedo_services_1.default(), new dto_validator_1.default());
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tipos = yield this.service.getAll();
                res.status(200).json(tipos);
                return;
            }
            catch (error) {
                next(error);
                return;
            }
        });
        this.getOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { cod } = req.params;
                const tipo = yield this.service.getOne(cod);
                if (!tipo) {
                    res.status(404).json({ message: 'Type toy not found' });
                    return;
                }
                res.status(200).json(tipo);
                return;
            }
            catch (error) {
                next(error);
                return;
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validatedData = this.validator.createTipoBrinquedo(req.body);
                const tipo = yield this.service.create(validatedData);
                res.status(201).json(tipo);
                return;
            }
            catch (error) {
                next(error);
                return;
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { cod } = req.params;
                const validatedData = this.validator.updateTipoBrinquedo(req.body);
                const updatedTipo = yield this.service.update(cod, validatedData);
                if (!updatedTipo) {
                    res.status(404).json({ message: 'Type toy not found' });
                    return;
                }
                res.status(200).json(updatedTipo);
                return;
            }
            catch (error) {
                next(error);
                return;
            }
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
}
exports.default = TiposBrinquedosController;
