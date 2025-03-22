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
const login_services_1 = __importDefault(require("../services/login.services"));
const base_controller_1 = require("./base.controller");
const dto_validator_1 = __importDefault(require("../validators/dto.validator"));
class LoginController extends base_controller_1.BaseController {
    constructor() {
        super(new login_services_1.default(), new dto_validator_1.default());
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const validatedData = this.validator.createLogin(req.body);
                const result = yield this.service.create(validatedData);
                res.status(201).json(result);
                return;
            }
            catch (error) {
                next(error);
                return;
            }
        });
    }
    getAll(req, res, next) {
        throw new Error('Method not implemented.');
    }
    getOne(req, res, next) {
        throw new Error('Method not implemented.');
    }
    update(req, res, next) {
        throw new Error('Method not implemented.');
    }
    delete(req, res, next) {
        throw new Error('Method not implemented.');
    }
}
exports.default = LoginController;
