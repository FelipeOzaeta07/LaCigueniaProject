import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { UserModel } from "src/app/domains/model/user/UserModel";
import { UserRepository } from "src/app/domains/repository/user/UserRepository";
import { UserEntity } from "./entity/UserEntity";
import { UserMapper } from "./mapper/UserMapper";
import { Injectable } from "@angular/core";
import UserEndPoint from "./endpoints/UserEndPoint";

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
        .post<UserEntity>(UserEndPoint.USER_BASE_URL + UserEndPoint.USER_CREATE, {params})
        .pipe(map(this.userMapper.converterEntityToModel));
    }
    override userCreate(params: { userEmail: string; userPassword: string; }): Observable<UserModel> {
        return this.http
        .post<UserEntity>(UserEndPoint.USER_BASE_URL + UserEndPoint.USER_SERVICE, {params})
        .pipe(map(this.userMapper.converterEntityToModel));
    }
}