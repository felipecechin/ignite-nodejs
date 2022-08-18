import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  updateUser(user: User): Promise<void>;
  findByEmail(email: string): Promise<User>;
  create(data: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<User>;
  list(): Promise<User[]>;
}

export { IUsersRepository };
