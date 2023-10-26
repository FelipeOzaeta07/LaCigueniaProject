import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { UserSharedRepository } from "@repository/user/UserSharedRepository";

export class UserSharedSetDataUserCase implements UseCaseVoid<string>{

    constructor(private userSharedRepository: UserSharedRepository){}

    execute(userId: string): any {
         this.userSharedRepository.setUser(userId);
    }
}