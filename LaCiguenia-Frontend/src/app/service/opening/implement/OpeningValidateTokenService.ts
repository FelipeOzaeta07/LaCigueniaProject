import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { OpeningAccessTokenService } from "./OpeningAccessTokenService";

@Injectable({
    providedIn: 'root'
})

export class OpeningValidateTokenService implements CanActivate{

    constructor(private openingAccessTokenService: OpeningAccessTokenService, private router: Router){}

    canActivate(): boolean {
        const accessToken = this.openingAccessTokenService.openingAccessTokenGet();
        if(!accessToken){
            this.router.navigate(['login-laciguenia/opening-page-principal']);
            return false;
        }
        return true;
    }
}