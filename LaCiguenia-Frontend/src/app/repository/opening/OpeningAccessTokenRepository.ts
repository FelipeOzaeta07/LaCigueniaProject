export abstract class OpeningAccessTokenRepository {
    abstract openingAccessTokenSave(message: string): void;
    abstract openingAccessTokenGet(): any;
    abstract openingAccessTokenRemove(): void;
}