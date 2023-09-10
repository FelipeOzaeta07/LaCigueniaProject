import { Injectable } from "@angular/core";
import { OpeningAccessTokenRepository } from "@repository/opening/OpeningAccessTokenRepository";

@Injectable({
    providedIn: 'root'
})

export class OpeningAccessTokenService extends OpeningAccessTokenRepository{

    override openingAccessTokenSave(message: string): void {
        localStorage.setItem('openingToken', message);
    }
    override openingAccessTokenGet() {
        return localStorage.getItem('openingToken')
    }
    override openingAccessTokenRemove(): void {
        localStorage.removeItem('openingToken');
    }
}