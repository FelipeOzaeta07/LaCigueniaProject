import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { AccessTokenRepository } from "../AccessTokenRepository";

export class AccessTokenGetUseCase implements UseCaseVoid<{accessToken: string}>{

    constructor(private accessTokenRepository: AccessTokenRepository){}

    execute(): any {
         this.accessTokenRepository.accessTokenGet();
    }
}