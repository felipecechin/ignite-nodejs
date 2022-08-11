import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  handle() {

  }
}

export { CreateUserUseCase };
