import { OpeningModel } from "@commons/domains/opening/OpeningModel";

export interface CashClosureModel{
    cashClosureId : number;
    cashClosureDate: string;
    cashCloseStore: string;
    cashClosureNumber: number;
    cashClosureTotalClosure: number;
    cashClosureTotalOpeningBox: number;
    cashClosureTotalMethodPay: number;
    cashClosureTotalExpense: number;
    cashClosureTotalCashBox: number;
    cashClosureDifference: number;
    openingEntity: OpeningModel;
}