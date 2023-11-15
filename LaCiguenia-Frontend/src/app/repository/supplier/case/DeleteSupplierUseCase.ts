import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { SupplierRepository } from "@repository/supplier/SupplierRepository";
import { Observable } from "rxjs";

export class DeleteSupplierUseCase implements UseCase<number, GenericResponse>{

    constructor(private supplierRepository: SupplierRepository){}

    execute(supplierId: number) : Observable<GenericResponse>{
        return this.supplierRepository.deleteSupplier(supplierId);
    }
}