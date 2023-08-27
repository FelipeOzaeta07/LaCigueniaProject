import { Injectable } from "@angular/core";
import { AccessTokenRepository } from "@repository/user/AccessTokenRepository";

@Injectable({
    providedIn: 'root'
})

export class AccessTokenService extends AccessTokenRepository{

    override accessTokenSave( message: string ): void {
        localStorage.setItem('token', message);
    }
    override accessTokenGet() {
        return localStorage.getItem('token');
    }
    override accessTokenRemove(): void {
        localStorage.removeItem('token');
    }
}