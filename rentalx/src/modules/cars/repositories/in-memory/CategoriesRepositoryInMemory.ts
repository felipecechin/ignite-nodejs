import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Promise<Category> {
    throw new Error("Method not implemented.");
  }
  list(): Promise<Category[]> {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateCategoryDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
