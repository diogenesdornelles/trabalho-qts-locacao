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
const bcrypt_1 = __importDefault(require('bcrypt'))
/**
 * Hashes a plain text password using bcrypt.
 *
 * @param plainPassword - The plain text password to be hashed.
 * @returns A promise that resolves to the hashed password.
 */
const hashPassword = plainPassword =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.hash(plainPassword, 10)
  })
exports.default = hashPassword
