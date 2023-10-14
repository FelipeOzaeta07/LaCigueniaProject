import { UseCaseVoid } from "@commons/helpers/UseCaseVoid";
import { SalesAccessTokenRepository } from "@repository/sales/SalesAccessTokenRepository";


export class SalesAccessTokenGetUseCase implements UseCaseVoid<{accessToken: string}>{

    constructor(private salesAccessTokenRepository: SalesAccessTokenRepository){}

    execute(): any {
         this.salesAccessTokenRepository.salesAccessTokenGet();
    }
}