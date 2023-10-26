import { StoreModel } from "@commons/domains/store/StoreModel";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class StoreRepository {
    abstract createStore(storeModel: StoreModel): Observable<GenericResponse>;
    abstract readStoreId(storeId: number): Observable<GenericResponse>;
    abstract readStores(): Observable<GenericResponse>;
}