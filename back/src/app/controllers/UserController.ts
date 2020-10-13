import { Request, Response } from "express";
import { getRepository } from "typeorm";

import User from "../models/User";

class UserController {
  index(req: Request, res: Response) {
    return res.send({ userId: req.userId });
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(User);

    const { email, password } = req.body;

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return res.status(409).json({
        mensagem: "O usuário já existe, por favor, utilize outro e-mail",
      });
    }

    const user = repository.create({ email, password });

    await repository.save(user);

    delete user.password;

    return res.status(201).json(user);
  }
}

export default new UserController();
