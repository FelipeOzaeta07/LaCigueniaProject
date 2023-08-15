import { Observable } from "rxjs";
import { UserModel } from "../../model/user/UserModel";


export abstract class UserRepository {
    abstract userService(params: {userEmail: string, userPassword: string}): Observable<UserModel>;
    abstract userCreate(params: {userEmail: string, userPassword: string}): Observable<UserModel>;
}