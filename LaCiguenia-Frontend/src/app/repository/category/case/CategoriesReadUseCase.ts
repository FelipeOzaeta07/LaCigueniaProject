import { UseCase } from "@commons/helpers/UserCase";
import { CategoryModel } from "@commons/domains/category/CategoryModel";
import { CategoryRepository } from "@repository/category/CategoryRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class CategoriesReadUseCase implements UseCase<CategoryModel, GenericResponse>{

    constructor(private categoryRepository: CategoryRepository){}

    execute() : Observable<GenericResponse>{
        return this.categoryRepository.readCategories();
    }
}