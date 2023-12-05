import { DetailModel } from "@commons/domains/detail/DetailModel";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export abstract class DetailRepository {
    abstract createDetail(detailModel :DetailModel): Observable<GenericResponse>;
    abstract readDetail(detailId: number): Observable<GenericResponse>;
    abstract readDetailes (): Observable<GenericResponse>;
    abstract updateDetail (detailModel :DetailModel): Observable<GenericResponse>;
    abstract deleteDetail (detailId: number): Observable<GenericResponse>;
    abstract detailProductoMoreSold (storeId: number): Observable<GenericResponse>;
}