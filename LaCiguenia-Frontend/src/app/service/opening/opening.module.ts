import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OpeningRepository } from '@repository/opening/OpeningRepository';
import { CreateOpeningUseCase } from '@repository/opening/case/CreateOpeningUseCase';
import { OpeningService } from './implement/OpeningService';
import { ReadLastOpeningUseCase } from '@repository/opening/case/ReadLastOpeningUseCase';

const createOpeningUseCaseFactory = (openingRepository: OpeningRepository) => new CreateOpeningUseCase(openingRepository);
export const createOpeningUseCaseProvider = {
    provide: CreateOpeningUseCase,
    useFactory: createOpeningUseCaseFactory,
    deps: [OpeningRepository],
};

const readLastOpeningUseCaseFactory = (openingRepository: OpeningRepository) => new ReadLastOpeningUseCase(openingRepository);
export const readLastOpeningUseCaseProvider = {
    provide: ReadLastOpeningUseCase,
    useFactory: readLastOpeningUseCaseFactory,
    deps: [OpeningRepository],
};

@NgModule({
  providers: [
    createOpeningUseCaseProvider,
    readLastOpeningUseCaseProvider,
    {provide: OpeningRepository, useClass: OpeningService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class OpenModule { }