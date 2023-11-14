import { UserModel } from "@commons/domains/user/UserModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { UserRepository } from "@repository/user/UserRepository";
import { Observable } from "rxjs";

export class UpdateUserUseCase implements UseCase<UserModel, GenericResponse>{

    constructor(private userRepository: UserRepository){}

    execute(userModel: UserModel): Observable<GenericResponse>{
        return this.userRepository.updateUser(userModel);
    }
}