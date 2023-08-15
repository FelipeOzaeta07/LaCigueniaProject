import { Observable } from "rxjs";
import { UserModel } from "../../model/user/UserModel";
import { UserRepository } from "../../repository/user/UserRepository";
import { UseCase } from "src/app/base/UserCase";


export class UserServiceUserCase implements UseCase<{userEmail: string; userPassword: string}, UserModel>{
    constructor(private userRepository: UserRepository){}

    execute(params: {userEmail: string, userPassword: string},): Observable<UserModel>{
        return this.userRepository.userService(params);
    }
}