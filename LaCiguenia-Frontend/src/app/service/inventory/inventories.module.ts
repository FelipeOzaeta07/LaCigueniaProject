import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRepository } from '@repository/inventory/InventoryRepository';
import { InventoryCreateUseCase } from '@repository/inventory/case/InventoryCreateUseCase';
import { InventoryReadUseCase } from '@repository/inventory/case/InventoryReadUseCase';
import { InventoryUpdateUseCase } from '@repository/inventory/case/InventoryUpdateUseCase';
import { InventoryDeleteUseCase } from '@repository/inventory/case/InventoryDeleteUseCase';
import { InventoriesReadUseCase } from '@repository/inventory/case/InventoriesReadUseCase';
import { InventoryService } from '@service/inventory/implement/InventoryService';
import { HttpClientModule } from '@angular/common/http';

const inventoryCreateUseCaseFactory = (inventoryRepository: InventoryRepository) => new InventoryCreateUseCase(inventoryRepository);
export const inventoryCreateUseCaseProvider = {
    provide: InventoryCreateUseCase,
    useFactory: inventoryCreateUseCaseFactory,
    deps: [InventoryRepository],
};
const inventoryReadUseCaseFactory = (inventoryRepository: InventoryRepository) => new InventoryReadUseCase(inventoryRepository);
export const inventoryReadUseCaseProvider = {
    provide: InventoryReadUseCase,
    useFactory: inventoryReadUseCaseFactory,
    deps: [InventoryRepository],
};
const inventorysReadUseCaseFactory = (inventoryRepository: InventoryRepository) => new InventoriesReadUseCase(inventoryRepository);
export const inventoriesReadUseCaseProvider = {
    provide: InventoriesReadUseCase,
    useFactory: inventorysReadUseCaseFactory,
    deps: [InventoryRepository],
};
const inventoryUpdateUseCaseFactory = (inventoryRepository: InventoryRepository) => new InventoryUpdateUseCase(inventoryRepository);
export const inventoryUpdateUseCaseProvider = {
    provide: InventoryUpdateUseCase,
    useFactory: inventoryUpdateUseCaseFactory,
    deps: [InventoryRepository],
};
const inventoryDeleteUseCaseFactory = (inventoryRepository: InventoryRepository) => new InventoryDeleteUseCase(inventoryRepository);
export const inventoryDeleteUseCaseProvider = {
    provide: InventoryDeleteUseCase,
    useFactory: inventoryDeleteUseCaseFactory,
    deps: [InventoryRepository],
};

@NgModule({
  providers: [
    inventoryCreateUseCaseProvider,
    inventoryReadUseCaseProvider,
    inventoriesReadUseCaseProvider,
    inventoryUpdateUseCaseProvider,
    inventoryDeleteUseCaseProvider,
    {provide: InventoryRepository, useClass: InventoryService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class InventoriesModule { }