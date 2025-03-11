import bcrypt from 'bcrypt'

const hashPassword = async (plainPassword: string): Promise<string> => {
  return await bcrypt.hash(plainPassword, 10)
}

export default hashPassword
