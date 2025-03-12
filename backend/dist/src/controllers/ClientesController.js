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
const ClienteServices_1 = __importDefault(require("../services/ClienteServices"));
const BaseController_1 = require("./BaseController");
const CreateClienteValidator_1 = require("../validators/CreateClienteValidator");
const UpdateBrinquedoValidator_1 = require("../validators/UpdateBrinquedoValidator");
class ClientesController extends BaseController_1.BaseController {
    constructor() {
        super(new ClienteServices_1.default());
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const clientes = yield this.service.getAll();
                res.status(200).json(clientes);
                return;
            }
            catch (error) {
                next(error);
                return;
            }
        });
        this.getOne = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { cpf } = req.params;
                const book = yield this.service.getOne(cpf);
                if (!book) {
                    res.status(404).json({ message: 'Customer not found' });
                    return;
                }
                res.status(200).json(book);
                return;
            }
            catch (error) {
                next(error);
                return;
            }
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validatedData = CreateClienteValidator_1.CreateClienteValidator.parse(req.body);
                const cliente = yield this.service.create(validatedData);
                res.status(201).json(cliente);
                return;
            }
            catch (error) {
                next(error);
                return;
            }
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { cpf } = req.params;
                const validatedData = UpdateBrinquedoValidator_1.UpdateBrinquedoValidator.parse(req.body);
                const updatedCliente = yield this.service.update(cpf, validatedData);
                if (!updatedCliente) {
                    res.status(404).json({ message: 'Customer not found' });
                    return;
                }
                res.status(200).json(updatedCliente);
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
exports.default = ClientesController;
