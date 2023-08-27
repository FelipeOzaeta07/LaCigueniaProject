import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InventoryModel } from "@commons/domains/model/inventory/InventoryModel";
import { BASE_URL_INVENTORY, CREATE_INVENTORY, DELETE_INVENTORY, READ_INVENTORY, READ_INVENTORYS, UPDATE_INVENTORY } from "@commons/endpoint/inventory/InventoryEndPoint";
import { InventoryMapper } from "@commons/mapper/inventory/InventoryMapper";
import { InventoryRepository } from "@repository/inventory/InventoryRepository";
import { Observable, catchError, throwError } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";


@Injectable({
    providedIn: 'root'
})
export class InventoryService extends InventoryRepository {

    inventoryMapper = new InventoryMapper();

    constructor(private http: HttpClient){
        super();
    }

    override createInventory(inventoryModel: InventoryModel): Observable<GenericResponse> {
        const inventoryEntity = this.inventoryMapper.converterModelToEntity(inventoryModel);
    
        return this.http
            .post<GenericResponse>(BASE_URL_INVENTORY + CREATE_INVENTORY, inventoryEntity)
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

    override updateInventory(inventoryModel: InventoryModel): Observable<GenericResponse> {
        const inventoryEntity = this.inventoryMapper.converterModelToEntity(inventoryModel);
    
        return this.http
            .post<GenericResponse>(BASE_URL_INVENTORY + UPDATE_INVENTORY, inventoryEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteInventory(params: { inventoryId: number; }): Observable<GenericResponse> {
    
        return this.http
            .post<GenericResponse>(BASE_URL_INVENTORY + DELETE_INVENTORY, params)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
}