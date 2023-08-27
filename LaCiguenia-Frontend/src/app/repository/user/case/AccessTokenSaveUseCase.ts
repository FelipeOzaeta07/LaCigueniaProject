import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { AccessTokenRepository } from "../AccessTokenRepository";

export class AccessTokenSaveUseCase implements UseCaseVoid<{message: string}>{

    constructor(private accessTokenRepository: AccessTokenRepository){}

    execute(params: {message: string}): void {
         this.accessTokenRepository.accessTokenSave(params.message);
    }
}