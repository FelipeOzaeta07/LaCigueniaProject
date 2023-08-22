import { Observable } from "rxjs";
import { ProductModel } from "@app/commons/domains/model/product/ProductModel";

export abstract class ProductRepository {
    abstract createProduct(productModel : ProductModel): Observable<GenericResponseDTO>;
    abstract readProduct(params: {productId: number}): Observable<GenericResponseDTO>;
    abstract readProducts (): Observable<GenericResponseDTO>;
    abstract updateProduct (categoryModel : ProductModel): Observable<GenericResponseDTO>;
    abstract deleteProduct (params: {productId: number}): Observable<GenericResponseDTO>;
}