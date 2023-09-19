import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { ProductRepository } from "../ProductRepository";
import { Observable } from "rxjs";

export class ReadProductForNameUseCase implements UseCase<string, GenericResponse>{

    constructor(private productRepository: ProductRepository){}

    execute(productName: string) : Observable<GenericResponse>{
        return this.productRepository.readProductForName(productName);
    }
}