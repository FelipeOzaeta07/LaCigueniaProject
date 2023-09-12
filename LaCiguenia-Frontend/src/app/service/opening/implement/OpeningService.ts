import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OpeningModel } from "@commons/domains/model/opening/OpeningModel";
import { BASE_URL_OPENING, CREATE_OPENING } from "@commons/endpoint/opening/OpeningEndPoint";
import { OpeningMapper } from "@commons/mapper/opening/OpeningMapper";
import { GenericResponse } from "@commons/response/GenericResponse";
import { OpeningRepository } from "@repository/opening/OpeningRepository";
import { Observable, catchError, tap, throwError } from "rxjs";
import { OpeningAccessTokenService } from "./OpeningAccessTokenService";

@Injectable({
    providedIn: 'root'
})
export class OpeningService extends OpeningRepository {

    openingMapper = new OpeningMapper();

    constructor(private http: HttpClient, private openingAccessTokenService: OpeningAccessTokenService){
        super();
    }

    override createOpening(openingModel: OpeningModel): Observable<GenericResponse> {
        const openingEntity = this.openingMapper.converterModelToEntity(openingModel);
    
        console.log("Prueba Fecha Frontend: " + openingEntity.openingDate)
        return this.http
            .post<GenericResponse>(BASE_URL_OPENING + CREATE_OPENING, openingEntity)
            .pipe(
                tap(genericResponse =>{
                    this.openingAccessTokenService.openingAccessTokenSave(genericResponse.message);
                })
            );
    }
}