import { UseCase } from "@commons/helpers/UserCase";
import { UserRepository } from "../UserRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class ReadUsersUseCase implements UseCase<number, GenericResponse>{
    constructor(private userRepository: UserRepository){}

    execute(): Observable<GenericResponse>{
        return this.userRepository.readUsers();
    }
}