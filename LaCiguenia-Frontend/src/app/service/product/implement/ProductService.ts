import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "@commons/domains/model/product/ProductModel";
import { ProductRepository } from "@repository/product/ProductRepository";
import { Observable, catchError, throwError } from "rxjs";
import { ProductMapper } from "@commons/mapper/product/ProductMapper";
import { GenericResponse } from "@commons/response/GenericResponse";
import { BASE_URL_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, READ_PRODUCT, READ_PRODUCTS, UPDATE_PRODUCT } from "@commons/endpoint/product/ProductEndPoint";

@Injectable({
    providedIn: 'root'
})
export class ProductService extends ProductRepository{

    productMapper = new ProductMapper();

    constructor(private http: HttpClient){
        super();
    }

    override createProduct(productModel: ProductModel): Observable<GenericResponse> {
       const productEntity = this.productMapper.converterEntityToModel(productModel);

       return this.http
            .post<GenericResponse>(BASE_URL_PRODUCT + CREATE_PRODUCT, productEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readProduct(params: { productCode: string; }): Observable<GenericResponse> {

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

    override updateProduct(productModel: ProductModel): Observable<GenericResponse> {
        const productEntity = this.productMapper.converterEntityToModel(productModel);

        return this.http
            .put<GenericResponse>(BASE_URL_PRODUCT + UPDATE_PRODUCT, productEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteProduct(params: { productCode: string; }): Observable<GenericResponse> {
        return this.http
            .delete<GenericResponse>(BASE_URL_PRODUCT + DELETE_PRODUCT, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

}