import bcrypt from 'bcrypt';

const saltRounds = 10;

export default async function hashPassword(plainPassword: string): Promise<string> {
  return await bcrypt.hash(plainPassword, saltRounds);
}