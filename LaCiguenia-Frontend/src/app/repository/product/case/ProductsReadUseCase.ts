import { UseCase } from "@commons/helpers/UserCase";
import { ProductModel } from "@commons/domains/model/product/ProductModel";
import { ProductRepository } from "@repository/product/ProductRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class ProductsReadUseCase implements UseCase<ProductModel, GenericResponse>{

    constructor(private productRepository: ProductRepository){}

    execute() : Observable<GenericResponse>{
        return this.productRepository.readProducts();
    }
}