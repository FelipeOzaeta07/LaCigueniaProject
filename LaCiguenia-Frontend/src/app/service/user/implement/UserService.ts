import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { UserRepository } from "@repository/user/UserRepository";
import { Injectable } from "@angular/core";
import { GenericResponse } from "@commons/response/GenericResponse";
import { BASE_URL_USER, CREATE_USER, SERVICE_USER } from "@commons/endpoint/user/UserEndPoint";
import { AccessTokenService } from "./AccessTokenService";
import { UserModel } from "@commons/domains/user/UserModel";
import { OpeningAccessTokenService } from "@service/opening/implement/OpeningAccessTokenService";
import { SalesAccessTokenService } from "@service/sales/SalesAccessTokenService";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class UserService extends UserRepository{

    constructor(private http: HttpClient, private accessTokenService: AccessTokenService,
        private openingAccessTokenService: OpeningAccessTokenService, private salesAccessTokenService: SalesAccessTokenService ){
        super();
    }

    override serviceUser(params: { userEmail: string; userPassword: string; }): Observable<GenericResponse> {
        return this.http
        .post<GenericResponse>(BASE_URL_USER + SERVICE_USER, params)
        .pipe(
            tap(genericResponse =>{
                this.accessTokenService.accessTokenSave(genericResponse.message);
            })
        );
    }
    
    override createUser(userModel: UserModel): Observable<GenericResponse> {
        return this.http
        .post<GenericResponse>(BASE_URL_USER + CREATE_USER, userModel)
        .pipe();
    }

    override closeSesionUser(): void {
        this.openingAccessTokenService.openingAccessTokenRemove();
        this.accessTokenService.accessTokenRemove();
        this.salesAccessTokenService.salesAccessTokenRemove();
        window.location.reload();
    }
}