import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";
import { UserRepository } from "@repository/user/UserRepository";

export class ReadUserUseCase implements UseCase<number, GenericResponse>{
    constructor(private userRepository: UserRepository){}

    execute(userId: number): Observable<GenericResponse>{
        return this.userRepository.readUser(userId);
    }
}