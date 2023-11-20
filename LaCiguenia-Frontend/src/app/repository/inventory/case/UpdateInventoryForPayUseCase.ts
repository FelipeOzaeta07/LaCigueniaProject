import { InventoryModel } from "@commons/domains/inventory/InventoryModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { InventoryRepository } from "../InventoryRepository";
import { Observable } from "rxjs";

export class UpdateInventoryForPayUseCase implements UseCase<InventoryModel, GenericResponse>{

    constructor(private inventoryRepository: InventoryRepository){}

    execute(inventoryModel: InventoryModel) : Observable<GenericResponse>{
        return this.inventoryRepository.updateInventoryForPay(inventoryModel);
    }
}