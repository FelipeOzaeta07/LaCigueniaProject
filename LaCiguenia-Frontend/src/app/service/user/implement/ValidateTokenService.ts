import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AccessTokenService } from "./AccessTokenService";

@Injectable({
    providedIn: 'root'
})

export class ValidateTokenService implements CanActivate{

    constructor(private accessTokenService: AccessTokenService, private router: Router){}

    canActivate(): boolean {
        const accessToken = this.accessTokenService.accessTokenGet();
        if(!accessToken){
            this.router.navigate(['login-laciguenia']);
            return false;
        }
        return true;
    }
    
}