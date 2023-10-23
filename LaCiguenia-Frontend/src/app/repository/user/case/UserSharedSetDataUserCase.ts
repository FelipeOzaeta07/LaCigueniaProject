import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { UserSharedRepository } from "@repository/user/UserSharedRepository";

export class UserSharedSetDataUserCase implements UseCaseVoid<number>{

    constructor(private userSharedRepository: UserSharedRepository){}

    execute(userId: number): any {
         this.userSharedRepository.setUser(userId);
    }
}