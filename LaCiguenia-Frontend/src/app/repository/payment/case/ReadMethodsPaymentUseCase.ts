import { MethodPaymentModel } from "@commons/domains/payment/MethodPaymentModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { MethodPaymentRepository } from "@repository/payment/MethodPaymentRepository";
import { Observable } from "rxjs";

export class ReadMethodsPaymentUseCase implements UseCase<MethodPaymentModel, GenericResponse>{

    constructor(private methodPaymentRepository: MethodPaymentRepository){}

    execute() : Observable<GenericResponse>{
        return this.methodPaymentRepository.readMethodsPayment();
    }
}