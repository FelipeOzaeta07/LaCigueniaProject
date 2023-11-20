import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { UserRepository } from "@repository/user/UserRepository";
import { Injectable } from "@angular/core";
import { GenericResponse } from "@commons/response/GenericResponse";
import { BASE_URL_USER, CREATE_USER, SERVICE_USER, USERS_READ, USER_DELETE, USER_READ, USER_UPDATE } from "@commons/endpoint/user/UserEndPoint";
import { AccessTokenService } from "./AccessTokenService";
import { UserModel } from "@commons/domains/user/UserModel";
import { OpeningAccessTokenService } from "@service/opening/implement/OpeningAccessTokenService";
import { SalesAccessTokenService } from "@service/sales/SalesAccessTokenService";

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

    override updateUser(userModel: UserModel): Observable<GenericResponse> {
        return this.http
        .put<GenericResponse>(BASE_URL_USER + USER_UPDATE, userModel)
        .pipe();
    }
    
    override createUser(userModel: UserModel): Observable<GenericResponse> {
        return this.http
        .post<GenericResponse>(BASE_URL_USER + CREATE_USER, userModel)
        .pipe();
    }

    override readUsers(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_USER + USERS_READ)
        .pipe();
    }

    override closeSesionUser(): void {
        this.openingAccessTokenService.openingAccessTokenRemove();
        this.accessTokenService.accessTokenRemove();
        this.salesAccessTokenService.salesAccessTokenRemove();
        window.location.reload();
    }

    override readUser(userId: number): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_USER + USER_READ + userId)
        .pipe();
    }

    override deletUser(userId: number): Observable<GenericResponse> {
        return this.http
        .delete<GenericResponse>(BASE_URL_USER + USER_DELETE + userId)
        .pipe();
    }
}