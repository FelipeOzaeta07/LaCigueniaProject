import { UserModel } from "@commons/domains/model/user/UserModel";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class UserRepository {
    abstract userService(params: {userEmail: string, userPassword: string}): Observable<GenericResponse>;
    abstract userCreate(userModel: UserModel): Observable<GenericResponse>;
}