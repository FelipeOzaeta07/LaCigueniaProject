import { Injectable } from "@angular/core";
import { UserSharedRepository } from "@repository/user/UserSharedRepository";

@Injectable({
    providedIn: 'root'
})
export class UserSharedService extends UserSharedRepository{

    data: number;

    constructor() {
        super();
        this.data = 0;
    }

    override setUser(userId: number): void {
        this.data = userId;
    }
    override getUser() {
        return this.data;
    }
}