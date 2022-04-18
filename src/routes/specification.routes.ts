import { Router } from "express";
import { SpecificationRespository } from "../modules/cars/repositories/SpecificationRepository";
import { CriarSpecificationService } from "../modules/cars/services/CriarSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRespository();

specificationRoutes.post("/", (request, response) => {
  const { name, descrição } = request.body;

  const createSpecificationService = new CriarSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({
    name,
    descrição,
    created_at: new Date(),
  });

  return response.status(201).send();
});

/* specificationRoutes.get("/", (request, response) => {
  const all = specificationRepository.listarCategorias();

  return response.json(all);
}); */

export { specificationRoutes };
