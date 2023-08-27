import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialRepository } from '@repository/material/MaterialRepository';
import { MaterialCreateUseCase } from '@repository/material/case/MaterialCreateUseCase';
import { MaterialReadUseCase } from '@repository/material/case/MaterialReadUseCase';
import { MaterialsReadUseCase } from '@repository/material/case/MaterialsReadUseCase';
import { MaterialUpdateUseCase } from '@repository/material/case/MaterialUpdateUseCase';
import { MaterialDeleteUseCase } from '@repository/material/case/MaterialDeleteUseCase';
import { HttpClientModule } from '@angular/common/http';
import { MaterialService } from './implement/MaterialService';


const materialCreateUseCaseFactory = (materialRepository: MaterialRepository) => new MaterialCreateUseCase(materialRepository);
export const materialCreateUseCaseProvider = {
    provide: MaterialCreateUseCase,
    useFactory: materialCreateUseCaseFactory,
    deps: [MaterialRepository],
};
const materialReadUseCaseFactory = (materialRepository: MaterialRepository) => new MaterialReadUseCase(materialRepository);
export const materialReadUseCaseProvider = {
    provide: MaterialReadUseCase,
    useFactory: materialReadUseCaseFactory,
    deps: [MaterialRepository],
};
const materialsReadUseCaseFactory = (materialRepository: MaterialRepository) => new MaterialsReadUseCase(materialRepository);
export const materialsReadUseCaseProvider = {
    provide: MaterialsReadUseCase,
    useFactory: materialsReadUseCaseFactory,
    deps: [MaterialRepository],
};
const materialUpdateUseCaseFactory = (materialRepository: MaterialRepository) => new MaterialUpdateUseCase(materialRepository);
export const materialUpdateUseCaseProvider = {
    provide: MaterialUpdateUseCase,
    useFactory: materialUpdateUseCaseFactory,
    deps: [MaterialRepository],
};
const materialDeleteUseCaseFactory = (materialRepository: MaterialRepository) => new MaterialDeleteUseCase(materialRepository);
export const materialDeleteUseCaseProvider = {
    provide: MaterialDeleteUseCase,
    useFactory: materialDeleteUseCaseFactory,
    deps: [MaterialRepository],
};
@NgModule({
  providers: [
    materialCreateUseCaseProvider,
    materialReadUseCaseProvider,
    materialsReadUseCaseProvider,
    materialUpdateUseCaseProvider,
    materialDeleteUseCaseProvider,
    {provide: MaterialRepository, useClass: MaterialService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MaterialModule { }
