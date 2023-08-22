import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UserModel } from "@src/app/commons/domains/model/user/UserModel";
import { UserRepository } from "@src/app/repository/user/UserRepository";
import { UserEntity } from "@app/commons/domains/entity/user/UserEntity";
import { UserMapper } from "@app/commons/mapper/user/UserMapper";
import { Injectable } from "@angular/core";
import { BASE_URL_USER, CREATE_USER, SERVICE_USER } from "@app/commons/endpoint/user/UserEndPoint";

@Injectable({
    providedIn: 'root'
})

export class UserService extends UserRepository{

    userMapper = new UserMapper();

    constructor(private http: HttpClient){
        super();
    }

    override userService(params: { userEmail: string; userPassword: string; }): Observable<UserModel> {
        return this.http
        .post<UserEntity>(BASE_URL_USER + SERVICE_USER, {params})
        .pipe(map(this.userMapper.converterEntityToModel));
    }
    override userCreate(params: { userEmail: string; userPassword: string; }): Observable<UserModel> {
        return this.http
        .post<UserEntity>(BASE_URL_USER + CREATE_USER, {params})
        .pipe(map(this.userMapper.converterEntityToModel));
    }
}