import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceCreateUseCase } from '@repository/invoice/case/InvoiceCreateUseCase';
import { InvoiceRepository } from '@repository/invoice/InvoiceRepository';
import { InvoiceReadUseCase } from '@repository/invoice/case/InvoiceReadUseCase';
import { InvoicesReadUseCase } from '@repository/invoice/case/InvoicesReadUseCase';
import { InvoiceUpdateUseCase } from '@repository/invoice/case/InvoiceUpdateUseCase';
import { InvoiceDeleteUseCase } from '@repository/invoice/case/InvoiceDeleteUseCase';
import { InvoiceService } from '@service/invoice/implement/InvoiceService';
import { HttpClientModule } from '@angular/common/http';

const invoiceCreateUseCaseFactory = (invoiceRepository: InvoiceRepository) => new InvoiceCreateUseCase(invoiceRepository);
export const invoiceCreateUseCaseProvider = {
    provide: InvoiceCreateUseCase,
    useFactory: invoiceCreateUseCaseFactory,
    deps: [InvoiceRepository],
};
const invoiceReadUseCaseFactory = (invoiceRepository: InvoiceRepository) => new InvoiceReadUseCase(invoiceRepository);
export const invoiceReadUseCaseProvider = {
    provide: InvoiceReadUseCase,
    useFactory: invoiceReadUseCaseFactory,
    deps: [InvoiceRepository],
};
const invoicesReadUseCaseFactory = (invoiceRepository: InvoiceRepository) => new InvoicesReadUseCase(invoiceRepository);
export const invoicesReadUseCaseProvider = {
    provide: InvoicesReadUseCase,
    useFactory: invoicesReadUseCaseFactory,
    deps: [InvoiceRepository],
};
const invoiceUpdateUseCaseFactory = (invoiceRepository: InvoiceRepository) => new InvoiceUpdateUseCase(invoiceRepository);
export const invoiceUpdateUseCaseProvider = {
    provide: InvoiceUpdateUseCase,
    useFactory: invoiceUpdateUseCaseFactory,
    deps: [InvoiceRepository],
};
const invoiceDeleteUseCaseFactory = (invoiceRepository: InvoiceRepository) => new InvoiceDeleteUseCase(invoiceRepository);
export const invoiceDeleteUseCaseProvider = {
    provide: InvoiceDeleteUseCase,
    useFactory: invoiceDeleteUseCaseFactory,
    deps: [InvoiceRepository],
};
@NgModule({
  providers: [
    invoiceCreateUseCaseProvider,
    invoiceReadUseCaseProvider,
    invoicesReadUseCaseProvider,
    invoiceUpdateUseCaseProvider,
    invoiceDeleteUseCaseProvider,
    {provide: InvoiceRepository, useClass: InvoiceService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class InvoiceModule { }
