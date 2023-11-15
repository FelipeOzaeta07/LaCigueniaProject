import { SupplierModel } from "@commons/domains/suppplier/SupplierModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { SupplierRepository } from "../SupplierRepository";
import { Observable } from "rxjs";

export class UpdateSupplierUseCase implements UseCase<SupplierModel, GenericResponse>{

    constructor(private supplierRepository: SupplierRepository){}

    execute(supplierModel: SupplierModel) : Observable<GenericResponse>{
        return this.supplierRepository.updateSupplier(supplierModel);
    }
}