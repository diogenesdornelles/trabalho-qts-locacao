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
const PagamentoServices_1 = __importDefault(require("../services/PagamentoServices"));
const BaseController_1 = require("./BaseController");
const schemas_1 = require("../schemas/schemas");
class PagamentosController extends BaseController_1.BaseController {
    constructor() {
        super(new PagamentoServices_1.default());
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const pagamentos = yield this.service.getAll();
                res.status(200).json(pagamentos);
                return;
            }
            catch (error) {
                next(error);
            }
        });
        this.getOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { cod } = req.params;
                const pagamento = yield this.service.getOne(cod);
                console.log(pagamento);
                if (!pagamento) {
                    res.status(404).json({ message: 'Payment not found' });
                    return;
                }
                res.status(200).json(pagamento);
                return;
            }
            catch (error) {
                next(error);
                return;
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validatedData = schemas_1.PagamentoSchema.parse(req.body);
                const locacao = yield this.service.create(validatedData);
                res.status(201).json(locacao);
                return;
            }
            catch (error) {
                next(error);
                return;
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
}
exports.default = PagamentosController;
