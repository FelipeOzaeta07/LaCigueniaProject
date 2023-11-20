import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SupplierRepository } from '@repository/supplier/SupplierRepository';
import { DeleteSupplierUseCase } from '@repository/supplier/case/DeleteSupplierUseCase';
import { UpdateSupplierUseCase } from '@repository/supplier/case/UpdateSupplierUseCase';
import { ReadLastSupplierUseCase } from '@repository/supplier/case/ReadLastSupplierUseCase';
import { CreateSupplierUseCase } from '@repository/supplier/case/CreateSupplierUseCase';
import { SupplierService } from './implement/SupplierService';
import { ReadSuppliersUseCase } from '@repository/supplier/case/ReadSuppliersUseCase';


const createSupplierUseCaseFactory = (supplierRepository: SupplierRepository) => new CreateSupplierUseCase(supplierRepository);
export const createSupplierUseCaseProvider = {
    provide: CreateSupplierUseCase,
    useFactory: createSupplierUseCaseFactory,
    deps: [SupplierRepository],
};

const readLastSupplierUseCaseFactory = (supplierRepository: SupplierRepository) => new ReadLastSupplierUseCase(supplierRepository);
export const readLastSupplierUseCaseProvider = {
    provide: ReadLastSupplierUseCase,
    useFactory: readLastSupplierUseCaseFactory,
    deps: [SupplierRepository],
};

const readSuppliersUseCaseFactory = (supplierRepository: SupplierRepository) => new ReadSuppliersUseCase(supplierRepository);
export const readSuppliersUseCaseProvider = {
    provide: ReadSuppliersUseCase,
    useFactory: readSuppliersUseCaseFactory,
    deps: [SupplierRepository],
};

const updateSupplierUseCaseFactory = (supplierRepository: SupplierRepository) => new UpdateSupplierUseCase(supplierRepository);
export const updateSupplierUseCaseProvider = {
    provide: UpdateSupplierUseCase,
    useFactory: updateSupplierUseCaseFactory,
    deps: [SupplierRepository],
};

const deleteSupplierUseCaseFactory = (supplierRepository: SupplierRepository) => new DeleteSupplierUseCase(supplierRepository);
export const deleteSupplierUseCaseProvider = {
    provide: DeleteSupplierUseCase,
    useFactory: deleteSupplierUseCaseFactory,
    deps: [SupplierRepository],
};

@NgModule({
  providers: [
    createSupplierUseCaseProvider,
    readLastSupplierUseCaseProvider,
    updateSupplierUseCaseProvider,
    deleteSupplierUseCaseProvider,
    readSuppliersUseCaseProvider,
    {provide: SupplierRepository, useClass: SupplierService}
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class SuppliersModule { }