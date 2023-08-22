import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "@src/app/commons/domains/model/product/ProductModel";
import { ProductRepository } from "@src/app/repository/product/ProductRepository";
import { Observable, catchError, throwError } from "rxjs";
import { ProductMapper } from "@app/commons/mapper/product/ProductMapper";
import { BASE_URL_PRODUCT, CREATE_PRODUCT, DELETE_PRODUCT, READ_PRODUCT, READ_PRODUCTS, UPDATE_PRODUCT } from "@app/commons/endpoint/product/ProductEndPoint";

@Injectable({
    providedIn: 'root'
})
export class ProductService extends ProductRepository{

    productMapper = new ProductMapper();

    constructor(private http: HttpClient){
        super();
    }

    override createProduct(productModel: ProductModel): Observable<GenericResponseDTO> {
       const productEntity = this.productMapper.converterEntityToModel(productModel);

       return this.http
            .post<GenericResponseDTO>(BASE_URL_PRODUCT + CREATE_PRODUCT, productEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readProduct(params: { productId: number; }): Observable<GenericResponseDTO> {

        return this.http
            .get<GenericResponseDTO>(BASE_URL_PRODUCT + READ_PRODUCT, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                 return throwError(error);
             }));
    }

    override readProducts(): Observable<GenericResponseDTO> {
        return this.http
            .get<GenericResponseDTO>(BASE_URL_PRODUCT + READ_PRODUCTS)
            .pipe(catchError((error: HttpErrorResponse) => {
                 return throwError(error);
             }));
    }

    override updateProduct(productModel: ProductModel): Observable<GenericResponseDTO> {
        const productEntity = this.productMapper.converterEntityToModel(productModel);

        return this.http
            .put<GenericResponseDTO>(BASE_URL_PRODUCT + UPDATE_PRODUCT, productEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteProduct(params: { productId: number; }): Observable<GenericResponseDTO> {
        return this.http
            .delete<GenericResponseDTO>(BASE_URL_PRODUCT + DELETE_PRODUCT, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

}