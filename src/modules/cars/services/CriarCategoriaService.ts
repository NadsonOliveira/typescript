import { CategoriesRepository } from "../repositories/categoriesRepository";
import { IcategoryDTO } from "../dtos/IcategoryDTO";

class CriarCategoriaService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, descrição }: IcategoryDTO): void {
    const categoryJaExiste = this.categoriesRepository.findByName(name);

    if (categoryJaExiste) {
      throw new Error("Categoria já existe");
    }
    this.categoriesRepository.create({
      name,
      descrição,
      created_at: new Date(),
    });
  }
}

export { CriarCategoriaService };
