import { CustomerModel } from "@commons/domains/customer/CustomerModel";
import { UseCase } from "@commons/helpers/UserCase";
import { CustomerRepository } from "@repository/customer/CustomerRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class CustomerReadUseCase implements UseCase<string, GenericResponse>{

    constructor(private customerRepository: CustomerRepository){}

    execute(customerId: string) : Observable<GenericResponse>{
        return this.customerRepository.readCustomer(customerId);
    }
}