import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InventoryModel } from "@commons/domains/inventory/InventoryModel";
import { BASE_URL_INVENTORY, CREATE_INVENTORY, DELETE_INVENTORY, READ_INVENTORIES_RECENTLY_CREATE, READ_INVENTORY, READ_INVENTORYS, UPDATE_INVENTORY } from "@commons/endpoint/inventory/InventoryEndPoint";
import { InventoryRepository } from "@repository/inventory/InventoryRepository";
import { Observable, catchError, throwError } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

@Injectable({
    providedIn: 'root'
})

export class InventoryService extends InventoryRepository {

    constructor(private http: HttpClient){
        super();
    }

    override createInventory(inventoryModel: InventoryModel): Observable<GenericResponse> {
        return this.http
            .post<GenericResponse>(BASE_URL_INVENTORY + CREATE_INVENTORY, inventoryModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readInventory(params: { inventoryId: number; }): Observable<GenericResponse> {
        return this.http
            .get<GenericResponse>(BASE_URL_INVENTORY + READ_INVENTORY, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readInventories(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_INVENTORY + READ_INVENTORYS)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override readInventoriesRecentlyCreate(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_INVENTORY + READ_INVENTORIES_RECENTLY_CREATE)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override updateInventory(inventoryModel: InventoryModel): Observable<GenericResponse> {
        return this.http
            .put<GenericResponse>(BASE_URL_INVENTORY + UPDATE_INVENTORY, inventoryModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteInventory(inventoryId: number): Observable<GenericResponse> {
        return this.http
            .delete<GenericResponse>(BASE_URL_INVENTORY + DELETE_INVENTORY + inventoryId)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
}