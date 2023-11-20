import { UseCase } from "@commons/helpers/UserCase";
import { UserRepository } from "../UserRepository";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export class DeleteUserUseCase implements UseCase<number, GenericResponse>{
    constructor(private userRepository: UserRepository){}

    execute(userId: number): Observable<GenericResponse>{
        return this.userRepository.deletUser(userId);
    }
}