import { InventoryModel } from "@commons/domains/inventory/InventoryModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { InventoryRepository } from "../InventoryRepository";
import { Observable } from "rxjs";

export class ReadInventoriesRecentlyCreateUseCase implements UseCase<InventoryModel, GenericResponse>{

    constructor(private inventoryRepository: InventoryRepository){}

    execute() : Observable<GenericResponse>{
        return this.inventoryRepository.readInventoriesRecentlyCreate();
    }
}