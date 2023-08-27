import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { AccessTokenRepository } from "../AccessTokenRepository";

export class AccessTokenRemoveUseCase implements UseCaseVoid<{accessToken: string}>{

    constructor(private accessTokenRepository: AccessTokenRepository){}

    execute(): any {
         this.accessTokenRepository.accessTokenRemove();
    }
}