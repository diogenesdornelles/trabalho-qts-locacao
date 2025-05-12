import DTOValidator from '../../src/validators/dto.validator'

describe('DTOValidator', () => {
  let validator: DTOValidator

  beforeEach(() => {
    validator = new DTOValidator()
  })

  describe('createBrinquedo', () => {
    it('deve validar um objeto de brinquedo válido', () => {
      const validBrinquedo = {
        nome: 'Brinquedo Legal',
        tipo_brinquedo: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // UUID válido
        marca: 'Marca X',
        data_aquisicao: '2020-01-01',
        valor_locacao: 10.5,
      }

      const result = validator.createBrinquedo(validBrinquedo)
      expect(result.nome).toBe(validBrinquedo.nome)
      expect(result.tipo_brinquedo).toBe(validBrinquedo.tipo_brinquedo)
    })

    it('deve validar um objeto de brinquedo válido, valor em string', () => {
      const validBrinquedo = {
        nome: 'Brinquedo Legal',
        tipo_brinquedo: 'd290f1ee-6c54-4b01-90e6-d701748f0851', // UUID válido
        marca: 'Marca X',
        data_aquisicao: '2020-01-01',
        valor_locacao: '10.5',
      }

      const result = validator.createBrinquedo(validBrinquedo)
      expect(result.nome).toBe(validBrinquedo.nome)
      expect(result.tipo_brinquedo).toBe(validBrinquedo.tipo_brinquedo)
    })

    it('deve lançar erro se o nome tiver menos de 3 caracteres', () => {
      const invalidBrinquedo = {
        nome: 'Br', // nome muito curto
        tipo_brinquedo: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        marca: 'Marca X',
        data_aquisicao: '2020-01-01',
        valor_locacao: 10.5,
      }
      expect(() => validator.createBrinquedo(invalidBrinquedo)).toThrow()
    })

    it('deve lançar erro se data em formato inválido 1', () => {
      const invalidBrinquedo = {
        nome: 'Brinquedo A',
        tipo_brinquedo: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        marca: 'Marca X',
        data_aquisicao: '20-01-2001', // invalid date
        valor_locacao: 10.5,
      }
      expect(() => validator.createBrinquedo(invalidBrinquedo)).toThrow()
    })

    it('deve lançar erro se data em formato inválido 2', () => {
      const invalidBrinquedo = {
        nome: 'Brinquedo A',
        tipo_brinquedo: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        marca: 'Marca X',
        data_aquisicao: 'invalid date', // data inválida
        valor_locacao: 10.5,
      }
      expect(() => validator.createBrinquedo(invalidBrinquedo)).toThrow()
    })

    it('deve lançar erro se a data de aquisição for futura', () => {
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 1)
      const invalidBrinquedo = {
        nome: 'Brinquedo Legal',
        tipo_brinquedo: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        marca: 'Marca X',
        data_aquisicao: futureDate.toISOString(),
        valor_locacao: 10.5,
      }
      expect(() => validator.createBrinquedo(invalidBrinquedo)).toThrow()
    })

    it('deve lançar erro se o tipo_brinquedo não for um UUID válido', () => {
      const invalidBrinquedo = {
        nome: 'Brinquedo Legal',
        tipo_brinquedo: 'invalid-uuid',
        marca: 'Marca X',
        data_aquisicao: '2020-01-01',
        valor_locacao: 10.5,
      }
      expect(() => validator.createBrinquedo(invalidBrinquedo)).toThrow()
    })
  })

  describe('createBrinquedoLocado', () => {
    it('deve validar um objeto de brinquedo locado válido', () => {
      const validObj = {
        cod_locacao: 'e7ff26cc-291a-4d2c-8ef1-9e0912853f6d',
        cod_brinquedo: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      }
      const result = validator.createBrinquedoLocado(validObj)
      expect(result).toEqual(validObj)
    })

    it('deve lançar erro se cod_locacao não for um UUID válido', () => {
      const invalidObj = {
        cod_locacao: 'not-a-uuid',
        cod_brinquedo: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      }
      expect(() => validator.createBrinquedoLocado(invalidObj)).toThrow()
    })
  })

  describe('createCliente', () => {
    it('deve validar um objeto de cliente válido', () => {
      const validCliente = {
        cpf: '52998224725', // CPF válido
        nome: 'Cliente Teste',
        endereco: 'Rua A, 123',
        data_nascimento: '2000-05-15',
        telefone: '11987654321', // 11 dígitos
      }
      const result = validator.createCliente(validCliente)
      expect(result.nome).toBe(validCliente.nome)
      expect(result.endereco).toBe(validCliente.endereco)
    })

    it('deve lançar erro se o CPF for inválido', () => {
      const invalidCliente = {
        cpf: '123', // CPF inválido
        nome: 'Cliente Teste',
        endereco: 'Rua A, 123',
        data_nascimento: '2000-05-15',
        telefone: '11987654321',
      }
      expect(() => validator.createCliente(invalidCliente)).toThrow()
    })

    it('deve lançar erro se o telefone não tiver 10 ou 11 dígitos', () => {
      const invalidCliente = {
        cpf: '52998224725',
        nome: 'Cliente Teste',
        endereco: 'Rua A, 123',
        data_nascimento: '2000-05-15',
        telefone: '123', // telefone inválido
      }
      expect(() => validator.createCliente(invalidCliente)).toThrow()
    })
  })

  describe('createFuncionario', () => {
    it('deve validar um objeto de funcionário válido', () => {
      const validFuncionario = {
        cpf: '52998224725',
        nome: 'Funcionario Teste',
        telefone: '11987654321',
        senha: 'Valida@123', // senha que cumpre os requisitos
        funcao: 'GERENTE',
      }
      const result = validator.createFuncionario(validFuncionario)
      expect(result.nome).toBe(validFuncionario.nome)
    })

    it('deve lançar erro se a senha não atender os requisitos', () => {
      const invalidFuncionario = {
        cpf: '52998224725',
        nome: 'Funcionario Teste',
        telefone: '11987654321',
        senha: '123', // não atende aos critérios mínimos
        funcao: 'GERENTE',
      }
      expect(() => validator.createFuncionario(invalidFuncionario)).toThrow()
    })
    it('deve lançar erro, pois função errada', () => {
      const invalidFuncionario = {
        cpf: '52998224725',
        nome: 'Funcionario Teste',
        telefone: '11987654321',
        senha: 'Valida@123',
        funcao: 'ADMINISTRADOR', // função não cumpre os requisitos
      }
      expect(() => validator.createFuncionario(invalidFuncionario)).toThrow()
    })
  })

  describe('createLocacao', () => {
    it('deve validar um objeto de locação válido', () => {
      const validLocacao = {
        cpf_cliente: '52998224725',
      }
      const result = validator.createLocacao(validLocacao)
      expect(result.cpf_cliente).toBe('52998224725')
    })

    it('deve lançar erro se o cpf_cliente for inválido', () => {
      const invalidLocacao = {
        cpf_cliente: '000', // CPF inválido
      }
      expect(() => validator.createLocacao(invalidLocacao)).toThrow()
    })
  })

  describe('createLogin', () => {
    it('deve validar um objeto de login válido', () => {
      const validLogin = {
        cpf: '52998224725',
        senha: 'Valid@123',
      }
      const result = validator.createLogin(validLogin)
      expect(result.cpf).toBe('52998224725')
    })

    it('deve lançar erro se a senha for inválida', () => {
      const invalidLogin = {
        cpf: '52998224725',
        senha: '123', // senha inválida
      }
      expect(() => validator.createLogin(invalidLogin)).toThrow()
    })
  })

  describe('createTipoBrinquedo', () => {
    it('deve validar um objeto de tipo de brinquedo válido', () => {
      const validTipo = {
        nome: 'Tipo A',
      }
      const result = validator.createTipoBrinquedo(validTipo)
      expect(result.nome).toBe('Tipo A')
    })

    it('deve lançar erro se o nome for menor que 3 caracteres', () => {
      const invalidTipo = {
        nome: 'A',
      }
      expect(() => validator.createTipoBrinquedo(invalidTipo)).toThrow()
    })
  })

  // Esquemas de atualização (update) – atributos são opcionais
  describe('updateBrinquedoLocado', () => {
    it('deve atualizar um objeto de brinquedo locado válido', () => {
      const updateObj = {
        cod_locacao: 'e7ff26cc-291a-4d2c-8ef1-9e0912853f6d',
        cod_brinquedo: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        ativo: true,
      }
      const result = validator.updateBrinquedoLocado(updateObj)
      expect(result.ativo).toBe(true)
    })
  })

  describe('updateBrinquedo', () => {
    it('deve atualizar um objeto de brinquedo válido', () => {
      const updateObj = {
        nome: 'Novo Nome',
        ativo: false,
      }
      const result = validator.updateBrinquedo(updateObj)
      expect(result.nome).toBe('Novo Nome')
      expect(result.ativo).toBe(false)
    })
  })

  describe('updateCliente', () => {
    it('deve atualizar um objeto de cliente válido', () => {
      const updateObj = {
        nome: 'Cliente Atualizado',
        endereco: 'Nova Rua, 456',
        ativo: true,
      }
      const result = validator.updateCliente(updateObj)
      expect(result.nome).toBe('Cliente Atualizado')
      expect(result.ativo).toBe(true)
    })
  })

  describe('updateFuncionario', () => {
    it('deve atualizar um objeto de funcionário válido', () => {
      const updateObj = {
        nome: 'Funcionario Atualizado',
        telefone: '11987654321',
        senha: 'Complex@123',
        funcao: 'ALMOXARIFE',
        ativo: false,
      }
      const result = validator.updateFuncionario(updateObj)
      expect(result.nome).toBe('Funcionario Atualizado')
      expect(result.funcao).toBe('ALMOXARIFE')
    })
  })

  describe('updateLocacao', () => {
    it('deve atualizar um objeto de locação válido', () => {
      const updateObj = {
        cpf_cliente: '52998224725',
        pgto_status: 'PAGO',
        ativo: true,
      }
      const result = validator.updateLocacao(updateObj)
      expect(result.pgto_status).toBe('PAGO')
      expect(result.ativo).toBe(true)
    })

    it('deve lançar erro se pgto_status for um valor inválido', () => {
      const updateObj = {
        cpf_cliente: '52998224725',
        pgto_status: 'INVALID_STATUS',
      }
      expect(() => validator.updateLocacao(updateObj)).toThrow()
    })
  })

  describe('updateTipoBrinquedo', () => {
    it('deve atualizar um objeto de tipo de brinquedo válido', () => {
      const updateObj = {
        nome: 'Tipo B',
        ativo: true,
      }
      const result = validator.updateTipoBrinquedo(updateObj)
      expect(result.nome).toBe('Tipo B')
      expect(result.ativo).toBe(true)
    })
  })
})