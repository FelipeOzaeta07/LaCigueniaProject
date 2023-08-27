import { UseCase } from "@commons/helpers/UserCase";
import { CategoryRepository } from "@repository/category/CategoryRepository";
import { CategoryModel } from "@commons/domains/model/category/CategoryModel";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class CategoryDeleteUseCase implements UseCase<CategoryModel, GenericResponse>{

    constructor(private categoryRepository: CategoryRepository){}

    execute(categoryModel: CategoryModel) : Observable<GenericResponse>{
        return this.categoryRepository.deleteCategory(categoryModel);
    }
}