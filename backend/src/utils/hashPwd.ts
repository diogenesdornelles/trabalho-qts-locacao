import bcrypt from 'bcrypt'

const saltRounds = 10

const hashPassword = async (
  plainPassword: string,
): Promise<string> => {
  return await bcrypt.hash(plainPassword, saltRounds)
}

export default hashPassword
