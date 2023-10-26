import { Injectable } from "@angular/core";
import { UserSharedRepository } from "@repository/user/UserSharedRepository";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserSharedService extends UserSharedRepository{

    private key = 'user-login';

    override setUser(userId: string): void {
        localStorage.setItem(this.key, userId.toString());
    }

    override getUser() {
        const VALUE = localStorage.getItem(this.key);
        return VALUE ? parseFloat(VALUE) : 0;
    }
}