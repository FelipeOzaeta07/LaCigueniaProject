import { StoreModel } from "../store/StoreModel";

export interface OpeningModel {
    openingId: number;
    openingDate: string;
    openingTotal: number;
    storeEntity: StoreModel;
}