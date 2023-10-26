import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { UserSharedRepository } from "@repository/user/UserSharedRepository";

export class UserSharedGetDataUseCase implements UseCaseVoid<number>{

    constructor(private userSharedRepository: UserSharedRepository){}

    execute(): any {
         return this.userSharedRepository.getUser();
    }
}