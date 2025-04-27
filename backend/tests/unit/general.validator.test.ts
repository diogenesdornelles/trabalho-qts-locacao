import GeneralValidator from '../../src/validators/general.validator'

describe('GeneralValidator', () => {
  describe('validateCpf', () => {
    it('deve retornar true para um CPF válido', () => {
      // Exemplo de CPF válido: 52998224725
      const validCpf = '52998224725'
      expect(GeneralValidator.validateCpf(validCpf)).toBe(true)
    })

    it('deve retornar false para CPF contendo caracteres não numéricos', () => {
      const invalidCpf = '5299822472a'
      expect(GeneralValidator.validateCpf(invalidCpf)).toBe(false)
    })

    it('deve retornar false para CPF com tamanho diferente de 11 dígitos', () => {
      const invalidCpf = '5299822472' // Apenas 10 dígitos
      expect(GeneralValidator.validateCpf(invalidCpf)).toBe(false)
    })

    it('deve retornar false para CPF com dígitos verificadores incorretos', () => {
      // Alterando o último dígito para forçar erro na validação dos dígitos verificadores
      const invalidCpf = '52998224726'
      expect(GeneralValidator.validateCpf(invalidCpf)).toBe(false)
    })
  })

  describe('validatePhone', () => {
    it('deve retornar true para um telefone válido com 11 dígitos', () => {
      const validPhone = '11987654321'
      expect(GeneralValidator.validatePhone(validPhone)).toBe(true)
    })

    it('deve retornar true para um telefone válido com 10 dígitos', () => {
      const validPhone = '1187654321'
      expect(GeneralValidator.validatePhone(validPhone)).toBe(true)
    })

    it('deve retornar false para telefone com menos de 10 dígitos', () => {
      const invalidPhone = '123456789'
      expect(GeneralValidator.validatePhone(invalidPhone)).toBe(false)
    })

    it('deve retornar false para telefone com mais de 12 dígitos', () => {
      const invalidPhone = '1234567890123'
      expect(GeneralValidator.validatePhone(invalidPhone)).toBe(false)
    })

    it('deve retornar false para telefone contendo caracteres não numéricos', () => {
      const invalidPhone = '1198765432a'
      expect(GeneralValidator.validatePhone(invalidPhone)).toBe(false)
    })
  })

  describe('validateUUID', () => {
    it('deve retornar true para um UUID válido', () => {
      const validUuid = 'd290f1ee-6c54-4b01-90e6-d701748f0851'
      expect(GeneralValidator.validateUUID(validUuid)).toBe(true)
    })

    it('deve retornar false para um UUID inválido', () => {
      const invalidUuid = 'not-a-valid-uuid'
      expect(GeneralValidator.validateUUID(invalidUuid)).toBe(false)
    })

    it('deve retornar false quando informado uma string vazia', () => {
      expect(GeneralValidator.validateUUID('')).toBe(false)
    })
  })

  describe('validateMoney', () => {
    it('deve retornar true para valor monetário com duas casas decimais', () => {
      const validMoney = 10.5
      expect(GeneralValidator.validateMoney(validMoney)).toBe(true)
    })

    it('deve retornar true para valor monetário inteiro', () => {
      const validMoney = 10
      expect(GeneralValidator.validateMoney(validMoney)).toBe(true)
    })

    it('deve retornar false para valor monetário com mais de duas casas decimais', () => {
      const invalidMoney = 10.123
      expect(GeneralValidator.validateMoney(invalidMoney)).toBe(false)
    })
  })

  describe('isValidPwd', () => {
    it('deve retornar true para senha que atende todos os requisitos', () => {
      // Pelo menos 8 caracteres, com ao menos 1 letra maiúscula, 1 minúscula, 1 dígito e 1 caractere especial.
      const validPwd = 'Valida@123'
      expect(GeneralValidator.isValidPwd(validPwd)).toBe(true)
    })

    it('deve retornar false para senha com menos de 8 caracteres', () => {
      const invalidPwd = 'Ab@1'
      expect(GeneralValidator.isValidPwd(invalidPwd)).toBe(false)
    })

    it('deve retornar false para senha sem letra minúscula', () => {
      const invalidPwd = 'VALIDA@123'
      expect(GeneralValidator.isValidPwd(invalidPwd)).toBe(false)
    })

    it('deve retornar false para senha sem letra maiúscula', () => {
      const invalidPwd = 'valida@123'
      expect(GeneralValidator.isValidPwd(invalidPwd)).toBe(false)
    })

    it('deve retornar false para senha sem dígito', () => {
      const invalidPwd = 'Valida@ABC'
      expect(GeneralValidator.isValidPwd(invalidPwd)).toBe(false)
    })

    it('deve retornar false para senha sem caractere especial', () => {
      const invalidPwd = 'Valida123'
      expect(GeneralValidator.isValidPwd(invalidPwd)).toBe(false)
    })
  })
})
