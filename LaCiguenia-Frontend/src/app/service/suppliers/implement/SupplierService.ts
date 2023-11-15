import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SupplierModel } from "@commons/domains/suppplier/SupplierModel";
import { BASE_URL_SUPPLIER, CREATE_SUPPLIER, DELETE_SUPPLIER, READ_THREE_LAST_SUPPLIERS, UPDATE_SUPPLIER } 
from "@commons/endpoint/supplier/SupplierEndPoint";
import { GenericResponse } from "@commons/response/GenericResponse";
import { SupplierRepository } from "@repository/supplier/SupplierRepository";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SupplierService extends SupplierRepository {

    constructor(private http: HttpClient){
        super();
    }

    override createSupplier(supplierModel: SupplierModel): Observable<GenericResponse> {
        return this.http
        .post<GenericResponse>(BASE_URL_SUPPLIER + CREATE_SUPPLIER, supplierModel)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override readLastSupplier(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_SUPPLIER + READ_THREE_LAST_SUPPLIERS)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override updateSupplier(supplierModel: SupplierModel): Observable<GenericResponse> {
        return this.http
        .put<GenericResponse>(BASE_URL_SUPPLIER + UPDATE_SUPPLIER, supplierModel)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
    override deleteSupplier(supplierId: number): Observable<GenericResponse> {
        return this.http
        .delete<GenericResponse>(BASE_URL_SUPPLIER + DELETE_SUPPLIER + supplierId)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
}