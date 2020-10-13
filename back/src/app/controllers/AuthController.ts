import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User)
    
    const { email, password } = req.body

    const user = await repository.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ mensagem: 'O usuário não foi encontrado. Por favor, utilize outro e-mail ou realize seu cadastro.' })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.status(401).json({ mensagem: 'A senha digitada está incorreta.' })
    }

    // parâmetros da função sign():
    // 1: payload -> informação que será armazenada no token
    // 2: secret -> informação sensível (deve ser única e segura) que será utilizada para decodificar o token
    // 3: {expiresIn} -> tempo de expiração do token
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

    delete user.password

    return res.json({
      user,
      token
    })
  }
}

export default new AuthController()