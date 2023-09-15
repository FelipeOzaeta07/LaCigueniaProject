import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRepository } from '@repository/customer/CustomerRepository';
import { CustomerService } from './implement/CustomerService';
import { HttpClientModule } from '@angular/common/http';
import { CustomerReadUseCase } from '@repository/customer/case/CustomerReadUseCase';
import { CustomesReadUseCase } from '@repository/customer/case/CustomesReadUseCase';
import { CreateCustomerUseCase } from '@repository/customer/case/CreateCustomerUseCase';
import { CustomerUpdateUseCase } from '@repository/customer/case/CustomerUpdateUseCase';
import { CustomerDeleteUseCase } from '@repository/customer/case/CustomerDeleteUseCase';

const createCustomerUseCaseFactory = (customerRepository: CustomerRepository) => new CreateCustomerUseCase(customerRepository);
export const createCustomerUseCaseProvider = {
    provide: CreateCustomerUseCase,
    useFactory: createCustomerUseCaseFactory,
    deps: [CustomerRepository],
};

const customerReadUseCaseFactory = (customerRepository: CustomerRepository) => new CustomerReadUseCase(customerRepository);
export const customerReadUseCaseProvider = {
    provide: CustomerReadUseCase,
    useFactory: customerReadUseCaseFactory,
    deps: [CustomerRepository],
};

const customersReadUseCaseFactory = (customerRepository: CustomerRepository) => new CustomesReadUseCase(customerRepository);
export const customersReadUseCaseProvider = {
    provide: CustomesReadUseCase,
    useFactory: customersReadUseCaseFactory,
    deps: [CustomerRepository],
};

const customerUpdateUseCaseFactory = (customerRepository: CustomerRepository) => new CustomerUpdateUseCase(customerRepository);
export const customerUpdateUseCaseProvider = {
    provide: CustomerUpdateUseCase,
    useFactory: customerUpdateUseCaseFactory,
    deps: [CustomerRepository],
};
const customerDeleteUseCaseFactory = (customerRepository: CustomerRepository) => new CustomerDeleteUseCase(customerRepository);
export const customerDeleteUseCaseProvider = {
    provide: CustomerDeleteUseCase,
    useFactory: customerDeleteUseCaseFactory,
    deps: [CustomerRepository],
};

@NgModule({
  providers: [
    createCustomerUseCaseProvider,
    customerReadUseCaseProvider,
    customersReadUseCaseProvider,
    customerUpdateUseCaseProvider,
    customerDeleteUseCaseProvider,
    {provide: CustomerRepository, useClass: CustomerService}
],
imports: [
    CommonModule,
    HttpClientModule
]
})
export class CustomerModule { }
