
import { CustomerModel } from "@commons/domains/customer/CustomerModel";
import { UseCase } from "@commons/helpers/UserCase";
import { CustomerRepository } from "@repository/customer/CustomerRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class CustomerUpdateUseCase implements UseCase<CustomerModel, GenericResponse>{

    constructor(private customerRepository: CustomerRepository){}

    execute(customerModel: CustomerModel) : Observable<GenericResponse>{
        return this.customerRepository.updateCustomer(customerModel);
    }
}