import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { OpeningAccessTokenRepository } from "../OpeningAccessTokenRepository";

export class OpeningAccessTokenSaveUseCase implements UseCaseVoid<{message: string}>{

    constructor(private openingAccessTokenRepository: OpeningAccessTokenRepository){}

    execute(params: {message: string}): void {
         this.openingAccessTokenRepository.openingAccessTokenSave(params.message);
    }
}