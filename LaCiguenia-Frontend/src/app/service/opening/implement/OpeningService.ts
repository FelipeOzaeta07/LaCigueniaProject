import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OpeningModel } from "@commons/domains/opening/OpeningModel";
import { BASE_URL_OPENING, CREATE_OPENING, READ_LAST_OPENING } from "@commons/endpoint/opening/OpeningEndPoint";
import { GenericResponse } from "@commons/response/GenericResponse";
import { OpeningRepository } from "@repository/opening/OpeningRepository";
import { Observable, tap } from "rxjs";
import { OpeningAccessTokenService } from "./OpeningAccessTokenService";
import { SalesAccessTokenService } from "@service/sales/SalesAccessTokenService";

@Injectable({
    providedIn: 'root'
})
export class OpeningService extends OpeningRepository {

    constructor(private http: HttpClient, private openingAccessTokenService: OpeningAccessTokenService, private salesAccessTokenService: SalesAccessTokenService){
        super();
    }

    override createOpening(openingModel: OpeningModel): Observable<GenericResponse> {
        return this.http
            .post<GenericResponse>(BASE_URL_OPENING + CREATE_OPENING, openingModel)
            .pipe(
                tap(genericResponse =>{
                    this.openingAccessTokenService.openingAccessTokenSave(genericResponse.message);
                    this.salesAccessTokenService.salesAccessTokenSave(genericResponse.message);
                })
            );
    }

    override readLastOpening(): Observable<GenericResponse> {
        return this.http.get<GenericResponse>(BASE_URL_OPENING + READ_LAST_OPENING)
    }
}