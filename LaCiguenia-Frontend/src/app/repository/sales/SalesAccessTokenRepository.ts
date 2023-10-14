export abstract class SalesAccessTokenRepository {
    abstract salesAccessTokenSave(message: string): void;
    abstract salesAccessTokenGet(): any;
    abstract salesAccessTokenRemove(): void;
}