
export abstract class AccessTokenRepository {
    abstract accessTokenSave(message: string): void;
    abstract accessTokenGet(): any;
    abstract accessTokenRemove(): void;
}