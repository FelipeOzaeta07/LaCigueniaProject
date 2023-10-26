import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMethodPaymentUseCase } from '@repository/payment/case/CreateMethodPaymentUseCase';
import { HttpClientModule } from '@angular/common/http';
import { MethodPaymentService } from './implement/MethodPaymentService';
import { MethodPaymentRepository } from '@repository/payment/MethodPaymentRepository';
import { ReadMethodsPaymentUseCase } from '@repository/payment/case/ReadMethodsPaymentUseCase';

const createMethodPaymentUseCaseFactory = (methodPaymentModel: MethodPaymentRepository) => new CreateMethodPaymentUseCase(methodPaymentModel);
export const createMethodPaymentUseCaseProvider = {
    provide: CreateMethodPaymentUseCase,
    useFactory: createMethodPaymentUseCaseFactory,
    deps: [MethodPaymentRepository]
};

const readMethodsPaymentUseCaseFactory = (methodPaymentModel: MethodPaymentRepository) => new ReadMethodsPaymentUseCase(methodPaymentModel);
export const readMethodsPaymentUseCaseProvider = {
    provide: ReadMethodsPaymentUseCase,
    useFactory: readMethodsPaymentUseCaseFactory,
    deps: [MethodPaymentRepository]
};

@NgModule({
  providers: [
    createMethodPaymentUseCaseProvider,
    readMethodsPaymentUseCaseProvider,
    {provide: MethodPaymentRepository, useClass: MethodPaymentService}
],
imports: [
    CommonModule,
    HttpClientModule
]
})
export class PaymentModule { }