import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { SalesAccessTokenService } from "./SalesAccessTokenService";


@Injectable({
    providedIn: 'root'
})

export class SalesValidateAccessTokenService implements CanActivate{

    constructor(private salesAccessTokenService: SalesAccessTokenService, private router: Router){}

    canActivate(): boolean {
        const accessToken = this.salesAccessTokenService.salesAccessTokenGet();
        if(!accessToken){
            this.router.navigate(['login-laciguenia/sales-page-principal']);
            return false;
        }
        return true;
    }
}