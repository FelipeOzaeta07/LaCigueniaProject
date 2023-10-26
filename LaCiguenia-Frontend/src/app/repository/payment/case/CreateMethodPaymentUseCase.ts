import { MethodPaymentModel } from "@commons/domains/payment/MethodPaymentModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { MethodPaymentRepository } from "../MethodPaymentRepository";
import { Observable } from "rxjs";

export class CreateMethodPaymentUseCase implements UseCase<MethodPaymentModel, GenericResponse>{

    constructor(private methodPaymentRepository: MethodPaymentRepository){}

    execute(methodPaymentModel: MethodPaymentModel) : Observable<GenericResponse>{
        return this.methodPaymentRepository.createMethodPayment(methodPaymentModel);
    }
}