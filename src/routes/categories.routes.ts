import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/categoriesRepository";
import { CriarCategoriaService } from "../modules/cars/services/CriarCategoriaService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, descrição } = request.body;

  const createCategoryService = new CriarCategoriaService(categoriesRepository);

  createCategoryService.execute({ name, descrição, created_at: new Date() });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.listarCategorias();

  return response.json(all);
});

export { categoriesRoutes };
