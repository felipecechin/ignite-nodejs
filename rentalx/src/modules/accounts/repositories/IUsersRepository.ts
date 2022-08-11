import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  updateUser(user: User): Promise<void>;
  findByemail(email: string): Promise<User>;
  create(data: ICreateUserDTO): Promise<void>;
  findByuserame(username: string): Promise<User>;
  findByid(id: string): Promise<User>;
  list(): Promise<User[]>;
}

export { IUsersRepository };
