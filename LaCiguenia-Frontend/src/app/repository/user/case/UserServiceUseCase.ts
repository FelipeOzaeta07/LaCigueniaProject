import { Observable } from "rxjs";
import { UserRepository } from "@repository/user/UserRepository";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";


export class UserServiceUseCase implements UseCase<{userEmail: string; userPassword: string}, GenericResponse>{
    constructor(private userRepository: UserRepository){}

    execute(params: {userEmail: string, userPassword: string},): Observable<GenericResponse>{
        return this.userRepository.userService(params);
    }
}