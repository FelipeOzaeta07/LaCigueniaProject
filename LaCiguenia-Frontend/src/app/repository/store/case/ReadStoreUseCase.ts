import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { StoreRepository } from "../StoreRepository";
import { Observable } from "rxjs";

export class ReadStoreUseCase implements UseCase<number, GenericResponse>{

    constructor(private storeRepository: StoreRepository){}

    execute(storeId: number) : Observable<GenericResponse>{
        return this.storeRepository.readStoreId(storeId);
    }
}