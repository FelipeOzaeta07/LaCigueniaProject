import { InventoryModel } from "@commons/domains/model/inventory/InventoryModel";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export abstract class InventoryRepository {
    abstract createInventory(inventoryModel :InventoryModel): Observable<GenericResponse>;
    abstract readInventory(params: {inventoryId: number}): Observable<GenericResponse>;
    abstract readInventories (): Observable<GenericResponse>;
    abstract updateInventory (inventoryModel :InventoryModel): Observable<GenericResponse>;
    abstract deleteInventory (params: {inventoryId: number}): Observable<GenericResponse>;
}