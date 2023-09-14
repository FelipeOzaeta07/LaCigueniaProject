import { UseCase } from "@commons/helpers/UserCase";
import { ProductRepository } from "@repository/product/ProductRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class DeleteProductUseCase implements UseCase<number, GenericResponse>{

    constructor(private productRepository: ProductRepository){}

    execute(productId: number) : Observable<GenericResponse>{
        return this.productRepository.deleteProduct(productId);
    }
}