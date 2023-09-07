import { InventoryEntity } from "@commons/domains/entity/inventory/InventoryEntity";
import { InventoryModel } from "@commons/domains/model/inventory/InventoryModel";
import { Mapper } from "@commons/helpers/Mapper";

export class InventoryMapper extends Mapper<InventoryEntity, InventoryModel>{
    override converterEntityToModel(params: InventoryEntity): InventoryModel {
        return{
            inventoryId: params.inventoryId,
            inventoryAmount: params.inventoryAmount,
            inventoryEntryDate: params.inventoryEntryDate,
            productEntity: params.productEntity
        };
    }
    override converterModelToEntity(params: InventoryModel): InventoryEntity {
        return{
            inventoryId: params.inventoryId,
            inventoryAmount: params.inventoryAmount,
            inventoryEntryDate: params.inventoryEntryDate,
            productEntity: params.productEntity
        };
    }
}