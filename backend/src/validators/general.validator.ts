/**
 * GeneralValidator
 * 
 * A utility class that provides static methods for validating various types of data.
 */
import { validate as isUuid } from 'uuid'

export default class GeneralValidator {
  
  /**
   * Validates a CPF (Brazilian individual taxpayer registry identification).
   * 
   * @param cpf - The CPF string to validate.
   * @returns True if the CPF is valid, otherwise false.
   */
  public static validateCpf = (cpf: string): boolean => {
    if (!cpf || cpf.length !== 11 || /\D/g.test(cpf)) {
      return false
    }

    let sum = 0
    let remainder: number

    // Validation of the first check digit
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i)
    }
    remainder = (sum * 10) % 11
    if (remainder === 10 || remainder === 11) remainder = 0
    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false
    }

    sum = 0
    // Validation of the second check digit
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

  /**
   * Validates a phone number.
   * 
   * @param phone - The phone number string to validate.
   * @returns True if the phone number is valid, otherwise false.
   */
  public static validatePhone = (phone: string): boolean => {
    if (!phone || phone.length < 10 || phone.length > 12 || /\D/g.test(phone)) {
      return false
    }
    return true
  }

  /**
   * Validates a UUID (Universally Unique Identifier).
   * 
   * @param cod - The UUID string to validate.
   * @returns True if the UUID is valid, otherwise false.
   */
  public static validateUUID = (cod: string): boolean => {
    if (!cod || !isUuid(cod)) {
      return false
    }
    return true
  }

  /**
   * Validates a monetary value.
   * 
   * @param value - The monetary value to validate.
   * @returns True if the value is valid (up to two decimal places), otherwise false.
   */
  public static validateMoney = (value: number): boolean => {
    return Number.isInteger(value * 100)
  }

  /**
   * Validates a password based on specific criteria.
   * 
   * The password must:
   * - Be at least 8 characters long.
   * - Contain at least one lowercase letter.
   * - Contain at least one uppercase letter.
   * - Contain at least one digit.
   * - Contain at least one special character.
   * 
   * @param pwd - The password string to validate.
   * @returns True if the password is valid, otherwise false.
   */
  public static isValidPwd = (pwd: string): boolean => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,30}$/
    return regex.test(pwd)
  }
}