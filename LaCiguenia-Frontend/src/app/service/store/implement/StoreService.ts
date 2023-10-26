import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StoreModel } from "@commons/domains/store/StoreModel";
import { BASE_URL_STORE, CREATE_STORE, READ_STORES, READ_STORE_ID } from "@commons/endpoint/store/StoreEndPoint";
import { GenericResponse } from "@commons/response/GenericResponse";
import { StoreRepository } from "@repository/store/StoreRepository";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StoreService extends StoreRepository{

    constructor(private http: HttpClient){
        super();
    }

    override createStore(storeModel: StoreModel): Observable<GenericResponse> {
        return this.http
        .post<GenericResponse>(BASE_URL_STORE + CREATE_STORE, storeModel)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override readStoreId(storeId: number): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_STORE + READ_STORE_ID + storeId)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override readStores(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_STORE + READ_STORES)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
}