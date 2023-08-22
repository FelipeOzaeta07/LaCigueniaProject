import { Observable } from "rxjs";
import { UserModel } from "@app/commons/domains/model/user/UserModel";
import { UserRepository } from "@app/repository/user/UserRepository";
import { UseCase } from "@src/app/commons/helpers/UserCase";

export class UserCreateUseCase implements UseCase<{userEmail: string; userPassword: string}, UserModel>{

    constructor(private userRepository: UserRepository){}

    execute(params: {userEmail: string; userPassword: string}) : Observable<UserModel>{
        return this.userRepository.userCreate(params);
    }
}