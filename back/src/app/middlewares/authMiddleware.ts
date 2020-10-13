import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface TokenPayload {
  id: string
  iat: number
  exp: number
}

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
    return res
      .status(401)
      .json({ 
        mensagem: 'Você não possui um token válido para acessar essa rota.' 
      })
  }

  // replace(): removendo a string 'Bearer' que fica antes do valor do token
  // trim(): removendo os espaços em branco
  const token = authorization.replace('Bearer', '').trim()

  try {
    // decodificando o token
    // verify() -> como usar:
    // 1: token que será verificado
    // 2: secret para decodificar o token
    const data = jwt.verify(token, 'secret')

    // desestruturando o payload do token para extrair o 'id'
    const { id } = data as TokenPayload

    // inserindo o 'id' dentro de uma propriedade que será anexada ao 'req'
    req.userId = id
    
    return next()
  } catch {
    return res
    .status(401)
    .json({ 
      mensagem: 'Você não possui um token válido para acessar essa rota.' 
    })
  }
}

export default authMiddleware