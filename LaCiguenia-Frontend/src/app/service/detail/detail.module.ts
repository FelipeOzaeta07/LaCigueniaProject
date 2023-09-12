import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailService } from './implement/DetailService';
import { DetailRepository } from '@repository/detail/DetailRepository';
import { HttpClientModule } from '@angular/common/http';
import { DetailCreateUseCase } from '@repository/detail/case/DetailCreateUseCase';
import { DetailReadUseCase } from '@repository/detail/case/DetailReadUseCase';
import { DetailsReadUseCase } from '@repository/detail/case/DetailsReadUseCase';
import { DetailDeleteUseCase } from '@repository/detail/case/DetailDeleteUseCase';
import { DetailUpdateUseCase } from '@repository/detail/case/DetailUpdateUseCase';




const detailCreateUseCaseFactory = (detailRepository: DetailRepository) => new DetailCreateUseCase(detailRepository);
export const detailCreateUseCaseProvider = {
    provide: DetailCreateUseCase,
    useFactory: detailCreateUseCaseFactory,
    deps: [DetailRepository],
};
const detailReadUseCaseFactory = (detailRepository: DetailRepository) => new DetailReadUseCase(detailRepository);
export const detailReadUseCaseProvider = {
    provide: DetailReadUseCase,
    useFactory: detailReadUseCaseFactory,
    deps: [DetailRepository],
};
const detailsReadUseCaseFactory = (detailRepository: DetailRepository) => new DetailsReadUseCase(detailRepository);
export const detailsReadUseCaseProvider = {
    provide: DetailsReadUseCase,
    useFactory: detailsReadUseCaseFactory,
    deps: [DetailRepository],
};
const detailUpdateUseCaseFactory = (detailRepository: DetailRepository) => new DetailUpdateUseCase(detailRepository);
export const detailUpdateUseCaseProvider = {
    provide: DetailUpdateUseCase,
    useFactory: detailUpdateUseCaseFactory,
    deps: [DetailRepository],
};
const detailDeleteUseCaseFactory = (detailRepository: DetailRepository) => new DetailDeleteUseCase(detailRepository);
export const detailDeleteUseCaseProvider = {
    provide: DetailDeleteUseCase,
    useFactory: detailDeleteUseCaseFactory,
    deps: [DetailRepository],
};

@NgModule({
  providers: [
    detailCreateUseCaseProvider,
    detailReadUseCaseProvider,
    detailsReadUseCaseProvider,
    detailUpdateUseCaseProvider,
    detailDeleteUseCaseProvider,
    {provide: DetailRepository, useClass: DetailService}
],
imports: [
    CommonModule,
    HttpClientModule
]
})
export class DetailModule { }
