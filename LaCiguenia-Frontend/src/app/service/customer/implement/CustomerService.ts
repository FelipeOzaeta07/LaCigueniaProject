import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomerModel } from "@commons/domains/model/customer/CustomerModel";
import { BASE_URL_CUSTOMER, CREATE_CUSTOMER, DELETE_CUSTOMER, READ_CUSTOMER, READ_CUSTOMERS, UPDATE_CUSTOMER } from "@commons/endpoint/customer/CustomerEndPoint";
import { CustomerMapper } from "@commons/mapper/customer/CustomerMapper";
import { GenericResponse } from "@commons/response/GenericResponse";
import { CustomerRepository } from "@repository/customer/CustomerRepository";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CustomerService extends CustomerRepository {
    
    customerMapper = new CustomerMapper();

    constructor(private http: HttpClient){
        super();
    }

    override createCustomer(customerModel: CustomerModel): Observable<GenericResponse> {
        const customerEntity = this.customerMapper.converterModelToEntity(customerModel);
    
        return this.http
            .post<GenericResponse>(BASE_URL_CUSTOMER + CREATE_CUSTOMER, customerEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }


    override readCustomer(params: { customerId: number; }): Observable<GenericResponse> {
        return this.http
            .get<GenericResponse>(BASE_URL_CUSTOMER + READ_CUSTOMER, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readCustomes(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_CUSTOMER + READ_CUSTOMERS)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override updateCustomer(customerModel: CustomerModel): Observable<GenericResponse> {
        const customerEntity = this.customerMapper.converterModelToEntity(customerModel);
    
        return this.http
            .put<GenericResponse>(BASE_URL_CUSTOMER + UPDATE_CUSTOMER, customerEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteCustomer(params: { customerId: number; }): Observable<GenericResponse> {
        return this.http
            .delete<GenericResponse>(BASE_URL_CUSTOMER + DELETE_CUSTOMER, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
}