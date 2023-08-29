import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { UserRepository } from "@repository/user/UserRepository";
import { UserMapper } from "@commons/mapper/user/UserMapper";
import { Injectable } from "@angular/core";
import { GenericResponse } from "@commons/response/GenericResponse";
import { BASE_URL_USER, CREATE_USER, SERVICE_USER } from "@commons/endpoint/user/UserEndPoint";
import { AccessTokenService } from "./AccessTokenService";
import { UserModel } from "@commons/domains/model/user/UserModel";

@Injectable({
    providedIn: 'root'
})

export class UserService extends UserRepository{

    userMapper = new UserMapper();

    constructor(private http: HttpClient, private accessTokenService: AccessTokenService ){
        super();
    }

    override userService(params: { userEmail: string; userPassword: string; }): Observable<GenericResponse> {
        return this.http
        .post<GenericResponse>(BASE_URL_USER + SERVICE_USER, params, { headers: { 'Content-Type': 'application/json' } })
        .pipe(
            tap(genericResponse =>{
                this.accessTokenService.accessTokenSave(genericResponse.message);
            })
        );
    }
    
    override userCreate(userModel: UserModel): Observable<GenericResponse> {
        return this.http
        .post<GenericResponse>(BASE_URL_USER + CREATE_USER, userModel, { headers: { 'Content-Type': 'application/json' } })
        .pipe();
    }
}