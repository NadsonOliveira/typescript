import { SpecificationRespository } from "../repositories/SpecificationRepository";
import { ISpecificationDTO } from "../dtos/ISpecificationDTO";

class CriarSpecificationService {
  constructor(private specificationRespository: SpecificationRespository) {}

  execute(data: ISpecificationDTO): void {
    const specification = this.specificationRespository.findByName(data.name);
    if (specification) {
      throw new Error("Specification already exists");
    }
    this.specificationRespository.create(data);
  }
}

export { CriarSpecificationService };
