import { IcategoryDTO } from "../dtos/IcategoryDTO";
import { Category } from "../model/category";

interface ICategoriaRepository {
  findByName(name: string): Category;
  listarCategorias(): Category[];
  create(data: IcategoryDTO): void;
}
export { ICategoriaRepository };
