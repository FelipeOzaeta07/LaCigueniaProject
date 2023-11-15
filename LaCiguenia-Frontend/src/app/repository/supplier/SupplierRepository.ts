import { SupplierModel } from "@commons/domains/suppplier/SupplierModel";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class SupplierRepository {
    abstract createSupplier(supplierModel : SupplierModel): Observable<GenericResponse>;
    abstract readLastSupplier(): Observable<GenericResponse>;
    abstract updateSupplier (supplierModel : SupplierModel): Observable<GenericResponse>;
    abstract deleteSupplier (supplierId: number): Observable<GenericResponse>;
}