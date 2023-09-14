import { UseCase } from "@commons/helpers/UserCase";
import { CategoryRepository } from "@repository/category/CategoryRepository";
import { CategoryModel } from "@commons/domains/category/CategoryModel";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class ReadCategoryUseCase implements UseCase<CategoryModel, GenericResponse>{

    constructor(private categoryRepository: CategoryRepository){}

    execute(params: {categoryId: number}) : Observable<GenericResponse>{
        return this.categoryRepository.readCategory(params);
    }
}