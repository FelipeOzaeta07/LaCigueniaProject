import { MethodPaymentModel } from "@commons/domains/payment/MethodPaymentModel";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class MethodPaymentRepository {
    abstract createMethodPayment(methodPaymentModel : MethodPaymentModel): Observable<GenericResponse>;
    abstract readMethodsPayment(): Observable<GenericResponse>;
}