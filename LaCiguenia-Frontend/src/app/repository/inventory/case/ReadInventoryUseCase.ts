import { InventoryModel } from "@commons/domains/inventory/InventoryModel";
import { UseCase } from "@commons/helpers/UserCase";
import { InventoryRepository } from "@repository/inventory/InventoryRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";


export class ReadInventoryUseCase implements UseCase<InventoryModel, GenericResponse>{

    constructor(private inventoryRepository: InventoryRepository){}

    execute(params: {inventoryId: number}) : Observable<GenericResponse>{
        return this.inventoryRepository.readInventory(params);
    }
}