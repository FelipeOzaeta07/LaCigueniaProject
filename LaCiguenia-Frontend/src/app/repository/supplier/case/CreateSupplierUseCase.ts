import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { SupplierRepository } from "../SupplierRepository";
import { Observable } from "rxjs";
import { SupplierModel } from "@commons/domains/suppplier/SupplierModel";


export class CreateSupplierUseCase implements UseCase<SupplierModel, GenericResponse>{

    constructor(private supplierRepository: SupplierRepository){}

    execute(supplierModel: SupplierModel) : Observable<GenericResponse>{
        return this.supplierRepository.createSupplier(supplierModel);
    }
}