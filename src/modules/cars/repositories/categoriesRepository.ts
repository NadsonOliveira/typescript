import { IcategoryDTO } from "../dtos/IcategoryDTO";
import { Category } from "../model/category";
import { ICategoriaRepository } from "./ICategoriaRepository";

class CategoriesRepository implements ICategoriaRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }
  create(data: IcategoryDTO): void {
    const category = new Category();

    Object.assign(data);

    this.categories.push(category);
  }
  listarCategorias(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
