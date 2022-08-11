import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  updateUser(user: User): Promise<void>;
  findByemail(email: string): Promise<User>;
  create(data: ICreateUserDTO): Promise<void>;
  findByid(id: string): Promise<User>;
  list(): Promise<User[]>;
}

export { IUsersRepository };
