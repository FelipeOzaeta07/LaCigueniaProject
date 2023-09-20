import { InventoryModel } from "@commons/domains/inventory/InventoryModel";
import { UseCase } from "@commons/helpers/UserCase";
import { InventoryRepository } from "@repository/inventory/InventoryRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class DeleteInventoryUseCase implements UseCase<number, GenericResponse>{

    constructor(private inventoryRepository: InventoryRepository){}

    execute(inventoryId: number) : Observable<GenericResponse>{
        return this.inventoryRepository.deleteInventory(inventoryId);
    }
}