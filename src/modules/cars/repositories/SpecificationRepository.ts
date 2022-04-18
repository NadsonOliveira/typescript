import { ISpecificationDTO } from "../dtos/ISpecificationDTO";
import { Specification } from "../model/specification";
import { ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRespository implements ISpecificationRepository {
  private specification: Specification[] = [];

  constructor() {
    this.specification = [];
  }
  findByName(name: string): Specification {
    const specification = this.specification.find(
      (specification) => specification.name === name
    );
    return specification;
  }
  create(data: ISpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, data);
    this.specification.push(specification);
  }
}
export { SpecificationRespository };
