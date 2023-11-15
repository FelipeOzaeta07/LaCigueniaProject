import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { SupplierRepository } from "../SupplierRepository";
import { Observable } from "rxjs";

export class ReadLastSupplierUseCase implements UseCase<number, GenericResponse>{

    constructor(private supplierRepository: SupplierRepository){}

    execute() : Observable<GenericResponse>{
        return this.supplierRepository.readLastSupplier();
    }
}