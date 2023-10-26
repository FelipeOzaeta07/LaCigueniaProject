import { StoreModel } from "@commons/domains/store/StoreModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { StoreRepository } from "../StoreRepository";
import { Observable } from "rxjs";

export class CreateStoreUseCase implements UseCase<StoreModel, GenericResponse>{

    constructor(private storeRepository: StoreRepository){}

    execute(storeModel: StoreModel) : Observable<GenericResponse>{
        return this.storeRepository.createStore(storeModel);
    }
}