import { DetailModel } from "@commons/domains/model/detail/DetailModel";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export abstract class DetailRepository {
    abstract createDetail(detailModel :DetailModel): Observable<GenericResponse>;
    abstract readDetail(params: {detailId: number}): Observable<GenericResponse>;
    abstract readDetailes (): Observable<GenericResponse>;
    abstract updateDetail (detailModel :DetailModel): Observable<GenericResponse>;
    abstract deleteDetail (params: {detailId: number}): Observable<GenericResponse>;
}