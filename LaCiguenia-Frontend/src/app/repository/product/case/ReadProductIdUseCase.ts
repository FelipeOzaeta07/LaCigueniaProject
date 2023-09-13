import { ProductModel } from "@commons/domains/product/ProductModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { ProductRepository } from "../ProductRepository";
import { Observable } from "rxjs";

export class ReadProductIdUseCase implements UseCase<ProductModel, GenericResponse>{

    constructor(private productRepository: ProductRepository){}

    execute(params: {productId: number}) : Observable<GenericResponse>{
        return this.productRepository.readProductId(params);
    }
}