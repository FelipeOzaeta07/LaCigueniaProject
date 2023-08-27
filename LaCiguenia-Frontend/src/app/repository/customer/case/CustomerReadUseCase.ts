import { CustomerModel } from "@commons/domains/model/customer/CustomerModel";
import { UseCase } from "@commons/helpers/UserCase";
import { CustomerRepository } from "@repository/customer/CustomerRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class CustomerReadUseCase implements UseCase<CustomerModel, GenericResponse>{

    constructor(private customerRepository: CustomerRepository){}

    execute(params: {customerId: number}) : Observable<GenericResponse>{
        return this.customerRepository.readCustomer(params);
    }
}