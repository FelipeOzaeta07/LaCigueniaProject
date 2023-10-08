import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { ProductRepository } from "../ProductRepository";
import { Observable } from "rxjs";


export class ReadProductForCategoryUseCase implements UseCase<number, GenericResponse>{

    constructor(private productRepository: ProductRepository){}

    execute(categoryId: number) : Observable<GenericResponse>{
        return this.productRepository.readProductForCategory(categoryId);
    }
}