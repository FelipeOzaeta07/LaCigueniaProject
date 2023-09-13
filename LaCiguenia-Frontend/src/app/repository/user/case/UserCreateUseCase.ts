import { Observable } from "rxjs";
import { UserRepository } from "@repository/user/UserRepository";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { UserModel } from "@commons/domains/user/UserModel";


export class UserCreateUseCase implements UseCase<UserModel, GenericResponse>{

    constructor(private userRepository: UserRepository){}

    execute(userModel: UserModel) : Observable<GenericResponse>{
        return this.userRepository.userCreate(userModel);
    }
}