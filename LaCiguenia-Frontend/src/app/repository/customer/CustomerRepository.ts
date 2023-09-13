import { CustomerModel } from "@commons/domains/customer/CustomerModel";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export abstract class CustomerRepository {
    abstract createCustomer(customerModel :CustomerModel): Observable<GenericResponse>;
    abstract readCustomer(params: {customerId: number}): Observable<GenericResponse>;
    abstract readCustomes (): Observable<GenericResponse>;
    abstract updateCustomer (customerModel :CustomerModel): Observable<GenericResponse>;
    abstract deleteCustomer (params: {customerId: number}): Observable<GenericResponse>;
}