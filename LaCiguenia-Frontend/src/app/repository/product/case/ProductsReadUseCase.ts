import { UseCase } from "@src/app/commons/helpers/UserCase";
import { ProductModel } from "@app/commons/domains/model/product/ProductModel";
import { ProductRepository } from "@app/repository/product/ProductRepository";
import { Observable } from "rxjs";

export class ProductsReadUseCase implements UseCase<ProductModel, GenericResponseDTO>{

    constructor(private productRepository: ProductRepository){}

    execute() : Observable<GenericResponseDTO>{
        return this.productRepository.readProducts();
    }
}