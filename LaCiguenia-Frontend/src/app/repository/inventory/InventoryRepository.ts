import { InventoryModel } from "@commons/domains/inventory/InventoryModel";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export abstract class InventoryRepository {
    abstract createInventory(inventoryModel :InventoryModel): Observable<GenericResponse>;
    abstract readInventory(params: {inventoryId: number}): Observable<GenericResponse>;
    abstract readInventories(): Observable<GenericResponse>;
    abstract readInventoriesRecentlyCreate(): Observable<GenericResponse>;
    abstract updateInventory(inventoryModel :InventoryModel): Observable<GenericResponse>;
    abstract updateInventoryForPay(inventoryModel :InventoryModel): Observable<GenericResponse>;
    abstract deleteInventory(inventoryId: number): Observable<GenericResponse>;
}