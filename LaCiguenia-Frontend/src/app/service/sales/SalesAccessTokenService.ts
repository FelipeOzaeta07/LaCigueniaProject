import { Injectable } from "@angular/core";
import { SalesAccessTokenRepository } from "@repository/sales/SalesAccessTokenRepository";

@Injectable({
    providedIn: 'root'
})

export class SalesAccessTokenService extends SalesAccessTokenRepository{

    override salesAccessTokenSave(message: string): void {
        localStorage.setItem('salesToken', message);
    }
    override salesAccessTokenGet() {
        return localStorage.getItem('salesToken')
    }
    override salesAccessTokenRemove(): void {
        localStorage.removeItem('salesToken');
    }
}