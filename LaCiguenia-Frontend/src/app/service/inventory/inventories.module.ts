import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRepository } from '@repository/inventory/InventoryRepository';
import { CreateInventoryUseCase } from '@repository/inventory/case/CreateInventoryUseCase';
import { ReadInventoryUseCase } from '@repository/inventory/case/ReadInventoryUseCase';
import { UpdateInventoryUseCase } from '@repository/inventory/case/UpdateInventoryUseCase';
import { DeleteInventoryUseCase } from '@repository/inventory/case/DeleteInventoryUseCase';
import { ReadInventoriesUseCase } from '@repository/inventory/case/ReadInventoriesUseCase';
import { InventoryService } from '@service/inventory/implement/InventoryService';
import { HttpClientModule } from '@angular/common/http';

const createInventoryUseCaseFactory = (inventoryRepository: InventoryRepository) => new CreateInventoryUseCase(inventoryRepository);
export const createInventoryUseCaseProvider = {
    provide: CreateInventoryUseCase,
    useFactory: createInventoryUseCaseFactory,
    deps: [InventoryRepository],
};
const readInventoryUseCaseFactory = (inventoryRepository: InventoryRepository) => new ReadInventoryUseCase(inventoryRepository);
export const readInventoryUseCaseProvider = {
    provide: ReadInventoryUseCase,
    useFactory: readInventoryUseCaseFactory,
    deps: [InventoryRepository],
};
const ReadInventoriesUseCaseFactory = (inventoryRepository: InventoryRepository) => new ReadInventoriesUseCase(inventoryRepository);
export const ReadInventoriesUseCaseProvider = {
    provide: ReadInventoriesUseCase,
    useFactory: ReadInventoriesUseCaseFactory,
    deps: [InventoryRepository],
};
const updateInventoryUseCaseFactory = (inventoryRepository: InventoryRepository) => new UpdateInventoryUseCase(inventoryRepository);
export const updateInventoryUseCaseProvider = {
    provide: UpdateInventoryUseCase,
    useFactory: updateInventoryUseCaseFactory,
    deps: [InventoryRepository],
};
const deleteInventoryUseCaseFactory = (inventoryRepository: InventoryRepository) => new DeleteInventoryUseCase(inventoryRepository);
export const deleteInventoryUseCaseProvider = {
    provide: DeleteInventoryUseCase,
    useFactory: deleteInventoryUseCaseFactory,
    deps: [InventoryRepository],
};

@NgModule({
  providers: [
    createInventoryUseCaseProvider,
    readInventoryUseCaseProvider,
    ReadInventoriesUseCaseProvider,
    updateInventoryUseCaseProvider,
    deleteInventoryUseCaseProvider,
    {provide: InventoryRepository, useClass: InventoryService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class InventoriesModule { }