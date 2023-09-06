import { Observable } from "rxjs";
import { ProductModel } from "@commons/domains/model/product/ProductModel";
import { GenericResponse } from "@commons/response/GenericResponse";

export abstract class ProductRepository {
    abstract createProduct(productModel : ProductModel): Observable<GenericResponse>;
    abstract readProduct(params: {productId: string}): Observable<GenericResponse>;
    abstract readProducts (): Observable<GenericResponse>;
    abstract updateProduct (categoryModel : ProductModel): Observable<GenericResponse>;
    abstract deleteProduct (params: {productId: string}): Observable<GenericResponse>;
}