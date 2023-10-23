import { UserModel } from "@commons/domains/user/UserModel";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class UserRepository {
    abstract serviceUser(params: {userEmail: string, userPassword: string}): Observable<GenericResponse>;
    abstract createUser(userModel: UserModel): Observable<GenericResponse>;
    abstract closeSesionUser(): void;
    abstract readUser(userId: number): Observable<GenericResponse>; 
}