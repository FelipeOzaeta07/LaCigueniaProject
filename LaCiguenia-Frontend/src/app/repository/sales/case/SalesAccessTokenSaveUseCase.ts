import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { SalesAccessTokenRepository } from "@repository/sales/SalesAccessTokenRepository";


export class SalesAccessTokenSaveUseCase implements UseCaseVoid<{message: string}>{

    constructor(private salesAccessTokenRepository: SalesAccessTokenRepository){}

    execute(params: {message: string}): void {
         this.salesAccessTokenRepository.salesAccessTokenSave(params.message);
    }
}