import { ISpecificationDTO } from "../dtos/ISpecificationDTO";

interface ISpecificationRepository {
  create(data: ISpecificationDTO): void;
  findByName(name: string): ISpecificationDTO;
}

export { ISpecificationRepository };
