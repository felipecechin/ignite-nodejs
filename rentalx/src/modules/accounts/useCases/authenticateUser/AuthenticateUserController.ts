import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    try {
      const token = await authenticateUserUseCase.execute({
        email,
        password,
      });
      return response.status(200).send(token);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }
}

export { AuthenticateUserController };
