import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { SalesAccessTokenRepository } from "@repository/sales/SalesAccessTokenRepository";
export class SalesAccessTokenRemoveUseCase implements UseCaseVoid<{accessToken: string}>{

    constructor(private salesAccessTokenRepository: SalesAccessTokenRepository){}

    execute(): any {
         this.salesAccessTokenRepository.salesAccessTokenRemove();
    }
}