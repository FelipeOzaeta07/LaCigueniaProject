import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DetailModel } from "@commons/domains/detail/DetailModel";
import { DetailProductInvoice } from "@commons/domains/detail/DetailProductInvoice";
import { BASE_URL_DETAIL, CREATE_DETAIL, DELETE_DETAIL, 
    READ_DETAIL, READ_DETAILS, UPDATE_DETAIL, READ_DETAILS_MORE_SOLD } 
    from "@commons/endpoint/detail/DetailEndPoint";
import { GenericResponse } from "@commons/response/GenericResponse";
import { DetailRepository } from "@repository/detail/DetailRepository";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DetailService extends DetailRepository {

    constructor(private http: HttpClient){
        super();
    }

    override createDetail(detailModel: DetailModel): Observable<GenericResponse> {
    
        return this.http
            .post<GenericResponse>(BASE_URL_DETAIL + CREATE_DETAIL, detailModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readDetail(detailId: number): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_DETAIL + READ_DETAIL + detailId)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override readDetailes(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_DETAIL + READ_DETAILS)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override updateDetail(detailModel: DetailModel): Observable<GenericResponse> {
    
        return this.http
            .put<GenericResponse>(BASE_URL_DETAIL + UPDATE_DETAIL, detailModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteDetail(detailId: number): Observable<GenericResponse> {
        return this.http
        .delete<GenericResponse>(BASE_URL_DETAIL + DELETE_DETAIL + detailId)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override detailProductoMoreSold(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_DETAIL + READ_DETAILS_MORE_SOLD)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
}