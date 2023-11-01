import { CashClosureModel } from "@commons/domains/cashclosure/CashClosureModel";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class CashClosureRepository {
    abstract createCashClosure(cashClosureModel : CashClosureModel): Observable<GenericResponse>;
    abstract readCashClosure(cashClosureId: number): Observable<GenericResponse>;
    abstract readCashClosures (): Observable<GenericResponse>;
    abstract readLastCashClosure (): Observable<GenericResponse>;
    abstract informationForCashClosures(): Observable<GenericResponse>;
    abstract detailMethodPaymentForCashClosuresUseCase(): Observable<GenericResponse>;
}