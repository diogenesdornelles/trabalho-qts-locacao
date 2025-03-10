import { validate as isUuid } from 'uuid'

export default class GeneralValidator {
  public static validateCpf = (cpf: string): boolean => {
    if (!cpf || cpf.length !== 11 || /\D/g.test(cpf)) {
      return false
    }

    let sum = 0
    let remainder: number

    // Validação do primeiro dígito verificador
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i)
    }
    remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false
    }

    sum = 0
    // Validação do segundo dígito verificador
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i)
    }
    remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false
    }

    return true
  }

  public static validatePhone = (phone: string): boolean => {
    if (!phone || phone.length < 10 || phone.length > 12 || /\D/g.test(phone)) {
      return false
    }
    return true
  }

  public static validateUUID = (cod: string): boolean => {
    if (!cod || !isUuid(cod)) {
      return false
    }
    return true
  }

  public static validateMoney = (value: number): boolean => {
    return Number.isInteger(value * 100)
  }
}
