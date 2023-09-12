import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OpeningRepository } from '@repository/opening/OpeningRepository';
import { OpeningCreateUseCase } from '@repository/opening/case/OpeningCreateUseCase';
import { OpeningService } from './implement/OpeningService';

const OpeningCreateUseCaseFactory = (openingRepository: OpeningRepository) => new OpeningCreateUseCase(openingRepository);
export const OpeningCreateUseCaseProvider = {
    provide: OpeningCreateUseCase,
    useFactory: OpeningCreateUseCaseFactory,
    deps: [OpeningRepository],
};

@NgModule({
  providers: [
    OpeningCreateUseCaseProvider,
    {provide: OpeningRepository, useClass: OpeningService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class OpenModule { }