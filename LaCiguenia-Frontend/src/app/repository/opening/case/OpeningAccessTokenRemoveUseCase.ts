import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { OpeningAccessTokenRepository } from "../OpeningAccessTokenRepository";

export class OpeningAccessTokenRemoveUseCase implements UseCaseVoid<{accessToken: string}>{

    constructor(private openingAccessTokenRepository: OpeningAccessTokenRepository){}

    execute(): any {
         this.openingAccessTokenRepository.openingAccessTokenRemove();
    }
}