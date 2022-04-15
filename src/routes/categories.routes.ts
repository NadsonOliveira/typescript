import { Router } from "express";
import { CategoriesRepository } from "../repositories/categoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, descrição } = request.body;
  const categoryJaExiste = categoriesRepository.findByName(name);

  if (categoryJaExiste) {
    return response.status(400).json({ error: "categoria já existe" });
  }
  categoriesRepository.create({ name, descrição, created_at: new Date() });
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.listarCategorias();

  return response.json(all);
});

export { categoriesRoutes };
