import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { OpeningAccessTokenRepository } from "../OpeningAccessTokenRepository";

export class OpeningAccessTokenGetUseCase implements UseCaseVoid<{accessToken: string}>{

    constructor(private openingAccessTokenRepository: OpeningAccessTokenRepository){}

    execute(): any {
         this.openingAccessTokenRepository.openingAccessTokenGet();
    }
}