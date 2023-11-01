import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashClosureRepository } from '@repository/cashclosure/CashClosureRepository';
import { CreateCashClosureUseCase } from '@repository/cashclosure/case/CreateCashClosureUseCase';
import { CashClosureService } from './implement/CashClosureService';
import { HttpClientModule } from '@angular/common/http';
import { ReadCashClosureUseCase } from '@repository/cashclosure/case/ReadCashClosureUseCase';
import { ReadCashClosuresUseCase } from '@repository/cashclosure/case/ReadCashClosuresUseCase';
import { ReadLastCashClosureUseCase } from '@repository/cashclosure/case/ReadLastCashClosureUseCase';
import { InformationForCashClosuresUseCase } from '@repository/cashclosure/case/InformationForCashClosuresUseCase';
import { DetailMethodPaymentForCashClosuresUseCase } from '@repository/cashclosure/case/DetailMethodPaymentForCashClosuresUseCase';


const createCashClosureUseCaseFactory = (cashClosureRepository: CashClosureRepository) => new CreateCashClosureUseCase(cashClosureRepository);
export const createCashClosureUseCaseProvider = {
    provide: CreateCashClosureUseCase,
    useFactory: createCashClosureUseCaseFactory,
    deps: [CashClosureRepository],
};

const readCashClosureUseCaseFactory = (cashClosureRepository: CashClosureRepository) => new ReadCashClosureUseCase(cashClosureRepository);
export const readCashClosureUseCaseProvider = {
    provide: ReadCashClosureUseCase,
    useFactory: readCashClosureUseCaseFactory,
    deps: [CashClosureRepository],
};

const readCashClosuresUseCaseFactory = (cashClosureRepository: CashClosureRepository) => new ReadCashClosuresUseCase(cashClosureRepository);
export const readCashClosuresUseCaseProvider = {
    provide: ReadCashClosuresUseCase,
    useFactory: readCashClosuresUseCaseFactory,
    deps: [CashClosureRepository],
};

const readLastCashClosuresUseCaseFactory = (cashClosureRepository: CashClosureRepository) => new ReadLastCashClosureUseCase(cashClosureRepository);
export const readLastCashClosuresUseCaseProvider = {
    provide: ReadLastCashClosureUseCase,
    useFactory: readLastCashClosuresUseCaseFactory,
    deps: [CashClosureRepository],
};

const informationForClosuresUseCaseFactory = (cashClosureRepository: CashClosureRepository) => new InformationForCashClosuresUseCase(cashClosureRepository);
export const informationForClosuresUseCaseProvider = {
    provide: InformationForCashClosuresUseCase,
    useFactory: informationForClosuresUseCaseFactory,
    deps: [CashClosureRepository],
};


const detailMethodPaymentForCashClosuresUseCaseFactory = (cashClosureRepository: CashClosureRepository) => new DetailMethodPaymentForCashClosuresUseCase(cashClosureRepository);
export const detailMethodPaymentForCashClosuresUseCaseProvider = {
    provide: DetailMethodPaymentForCashClosuresUseCase,
    useFactory: detailMethodPaymentForCashClosuresUseCaseFactory,
    deps: [CashClosureRepository],
};

@NgModule({
  providers: [
    createCashClosureUseCaseProvider,
    readCashClosureUseCaseProvider,
    readCashClosuresUseCaseProvider,
    readLastCashClosuresUseCaseProvider,
    informationForClosuresUseCaseProvider,
    detailMethodPaymentForCashClosuresUseCaseProvider,
    {provide: CashClosureRepository, useClass: CashClosureService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CashClosureModule { }