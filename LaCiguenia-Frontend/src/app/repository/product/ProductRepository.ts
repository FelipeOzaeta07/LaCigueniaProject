import { Observable } from "rxjs";
import { ProductModel } from "@commons/domains/product/ProductModel";
import { GenericResponse } from "@commons/response/GenericResponse";

export abstract class ProductRepository {
    abstract createProducts(productModel : ProductModel): Observable<GenericResponse>;
    abstract readProductId(params: {productId: number}): Observable<GenericResponse>;
    abstract readProduct(params: {productName: string}): Observable<GenericResponse>;
    abstract readProducts (): Observable<GenericResponse>;
    abstract readProductsRecentlyCreate(): Observable<GenericResponse>;
    abstract updateProduct (productModel : ProductModel): Observable<GenericResponse>;
    abstract deleteProduct (productId: number): Observable<GenericResponse>;
    abstract readProductForName (productName: string): Observable<GenericResponse>;
}