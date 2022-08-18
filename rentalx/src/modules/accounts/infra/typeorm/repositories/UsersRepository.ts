import { Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppDataSource } from "@shared/infra/typeorm";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async updateUser(user: User): Promise<void> {
    await this.repository.save(user);
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });
    return user;
  }

  async create(data: ICreateUserDTO): Promise<void> {
    const { name, password, email, driver_license, avatar, id } = data;
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }
}

export { UsersRepository };
