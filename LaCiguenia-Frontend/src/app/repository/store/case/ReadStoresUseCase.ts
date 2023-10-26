import { UseCase } from "@commons/helpers/UserCase";
import { StoreRepository } from "../StoreRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class ReadStoresUseCase implements UseCase<number, GenericResponse>{

    constructor(private storeRepository: StoreRepository){}

    execute() : Observable<GenericResponse>{
        return this.storeRepository.readStores();
    }
}