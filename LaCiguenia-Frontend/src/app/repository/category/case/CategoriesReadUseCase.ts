import { UseCase } from "@src/app/commons/helpers/UserCase";
import { CategoryModel } from "@app/commons/domains/model/category/CategoryModel";
import { CategoryRepository } from "@app/repository/category/CategoryRepository";
import { Observable } from "rxjs";


export class CategoriesReadUseCase implements UseCase<CategoryModel, GenericResponseDTO>{

    constructor(private categoryRepository: CategoryRepository){}

    execute() : Observable<GenericResponseDTO>{
        return this.categoryRepository.readCategories();
    }
}