import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class UserRepository {
    abstract userService(params: {userEmail: string, userPassword: string}): Observable<GenericResponse>;
    abstract userCreate(params: {userEmail: string, userPassword: string}): Observable<GenericResponse>;
}