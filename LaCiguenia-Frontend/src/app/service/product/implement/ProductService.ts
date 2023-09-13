import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "@commons/domains/product/ProductModel";
import { ProductRepository } from "@repository/product/ProductRepository";
import { Observable, catchError, throwError } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";
import { BASE_URL_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, READ_PRODUCT, READ_PRODUCTS, UPDATE_PRODUCT, READ_PRODUCT_ID,  READ_PRODUCTS_RECENTLY_CREATE  } from "@commons/endpoint/product/ProductEndPoint";

@Injectable({
    providedIn: 'root'
})

export class ProductService extends ProductRepository{

    constructor(private http: HttpClient){
        super();
    }

    override createProducts(productModel: ProductModel): Observable<GenericResponse> {
       return this.http
            .post<GenericResponse>(BASE_URL_PRODUCT + CREATE_PRODUCT, productModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readProductId(params: { productId: number; }): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_PRODUCT + READ_PRODUCT_ID, {params})
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override readProduct(params: {productName: string}): Observable<GenericResponse> {
        return this.http
            .get<GenericResponse>(BASE_URL_PRODUCT + READ_PRODUCT, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                 return throwError(error);
             }));
    }

    override readProducts(): Observable<GenericResponse> {
        return this.http
            .get<GenericResponse>(BASE_URL_PRODUCT + READ_PRODUCTS)
            .pipe(catchError((error: HttpErrorResponse) => {
                 return throwError(error);
             }));
    }

    override readProductsRecentlyCreate(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_PRODUCT + READ_PRODUCTS_RECENTLY_CREATE)
        .pipe(catchError((error: HttpErrorResponse) => {
             return throwError(error);
         }));
    }

    override updateProduct(productModel: ProductModel): Observable<GenericResponse> {
        return this.http
            .put<GenericResponse>(BASE_URL_PRODUCT + UPDATE_PRODUCT, productModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteProduct(params: {productId: number}): Observable<GenericResponse> {
        return this.http
            .delete<GenericResponse>(BASE_URL_PRODUCT + DELETE_PRODUCT, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
}