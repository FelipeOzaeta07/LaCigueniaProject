export abstract class UserSharedRepository {
    abstract setUser(userId: string): void;
    abstract getUser(): any;
}