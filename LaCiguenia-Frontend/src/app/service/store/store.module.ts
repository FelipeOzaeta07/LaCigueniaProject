import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateStoreUseCase } from '@repository/store/case/CreateStoreUseCase';
import { StoreRepository } from '@repository/store/StoreRepository';
import { StoreService } from './implement/StoreService';
import { ReadStoreUseCase } from '@repository/store/case/ReadStoreUseCase';
import { ReadStoresUseCase } from '@repository/store/case/ReadStoresUseCase';

const createStoreUseCaseFactory = (storeRepository: StoreRepository) => new CreateStoreUseCase(storeRepository);
export const createStoreUseCaseProvider = {
    provide: CreateStoreUseCase,
    useFactory: createStoreUseCaseFactory,
    deps: [StoreRepository]
};

const readStoreUseCaseFactory = (storeRepository: StoreRepository) => new ReadStoreUseCase(storeRepository);
export const readStoreUseCaseProvider = {
    provide: ReadStoreUseCase,
    useFactory: readStoreUseCaseFactory,
    deps: [StoreRepository]
};

const readStoresUseCaseFactory = (storeRepository: StoreRepository) => new ReadStoresUseCase(storeRepository);
export const readStoresUseCaseProvider = {
    provide: ReadStoresUseCase,
    useFactory: readStoresUseCaseFactory,
    deps: [StoreRepository]
};

@NgModule({
  providers: [
    createStoreUseCaseProvider,
    readStoreUseCaseProvider,
    readStoresUseCaseProvider,
    {provide: StoreRepository, useClass: StoreService}
],
imports: [
    CommonModule,
    HttpClientModule
]
})
export class StoreModule { }