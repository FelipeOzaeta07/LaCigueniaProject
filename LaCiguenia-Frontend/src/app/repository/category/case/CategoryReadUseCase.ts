import { UseCase } from "@src/app/commons/helpers/UserCase";
import { CategoryRepository } from "@app/repository/category/CategoryRepository";
import { CategoryModel } from "@app/commons/domains/model/category/CategoryModel";
import { Observable } from "rxjs";

export class CategoryReadUseCase implements UseCase<CategoryModel, GenericResponseDTO>{

    constructor(private categoryRepository: CategoryRepository){}

    execute(params: {categoryId: number}) : Observable<GenericResponseDTO>{
        return this.categoryRepository.readCategory(params);
    }
}