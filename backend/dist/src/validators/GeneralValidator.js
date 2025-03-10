"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class GeneralValidator {
}
GeneralValidator.validateCpf = (cpf) => {
    if (!cpf || cpf.length !== 11 || /\D/g.test(cpf)) {
        return false;
    }
    let sum = 0;
    let remainder;
    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11)
        remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
    }
    sum = 0;
    // Validação do segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11)
        remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
    }
    return true;
};
GeneralValidator.validatePhone = (phone) => {
    if (!phone || phone.length < 10 || phone.length > 12 || /\D/g.test(phone)) {
        return false;
    }
    return true;
};
GeneralValidator.validateUUID = (cod) => {
    if (!cod || !(0, uuid_1.validate)(cod)) {
        return false;
    }
    return true;
};
GeneralValidator.validateMoney = (value) => {
    return Number.isInteger(value * 100);
};
exports.default = GeneralValidator;
