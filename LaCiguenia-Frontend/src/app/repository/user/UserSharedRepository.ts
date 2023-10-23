export abstract class UserSharedRepository {
    abstract setUser(userId: number): void;
    abstract getUser(): any;
}