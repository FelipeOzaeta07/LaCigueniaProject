import { UseCase } from "@src/app/commons/helpers/UserCase";
import { CategoryRepository } from "@app/repository/category/CategoryRepository";
import { CategoryModel } from "@app/commons/domains/model/category/CategoryModel";
import { Observable } from "rxjs";


export class CategoryUpdateUseCase implements UseCase<CategoryModel, GenericResponseDTO>{

    constructor(private categoryRepository: CategoryRepository){}

    execute(categoryModel: CategoryModel) : Observable<GenericResponseDTO>{
        return this.categoryRepository.updateCategory(categoryModel);
    }
}