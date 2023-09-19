import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from '@repository/product/ProductRepository';
import { ProductService } from '@service/product/implement/ProductService';
import { HttpClientModule } from '@angular/common/http';
import { CreateProductsUseCase } from '@repository/product/case/CreateProductsUseCase';
import { ReadProductIdUseCase } from '@repository/product/case/ReadProductIdUseCase';
import { ReadProductUseCase } from '@repository/product/case/ReadProductUseCase';
import { ReadProductsUseCase } from '@repository/product/case/ReadProductsUseCase';
import { ReadProductsRecentlyCreateUseCase } from '@repository/product/case/ReadProductsRecentlyCreateUseCase';
import { UpdateProductUseCase } from '@repository/product/case/UpdateProductUseCase';
import { DeleteProductUseCase } from '@repository/product/case/DeleteProductUseCase';
import { ReadProductForNameUseCase } from '@repository/product/case/ReadProductForNameUseCase';

const createProductsUseCaseFactory = (productRepository: ProductRepository) => new CreateProductsUseCase(productRepository);
export const createProductsUseCaseProvider = {
    provide: CreateProductsUseCase,
    useFactory: createProductsUseCaseFactory,
    deps: [ProductRepository]
};

const readProductIdUseCaseFactory = (productRepository: ProductRepository) => new ReadProductIdUseCase(productRepository);
export const readProductIdUseCaseProvider = {
    provide: ReadProductIdUseCase,
    useFactory: readProductIdUseCaseFactory,
    deps: [ProductRepository]
};

const readProductUseCaseUseCaseFactory = (productRepository: ProductRepository) => new ReadProductUseCase(productRepository);
export const readProductUseCaseUseCaseProvider = {
    provide: ReadProductUseCase,
    useFactory: readProductUseCaseUseCaseFactory,
    deps: [ProductRepository]
};

const readProductsUseCaseFactory = (productRespository: ProductRepository) => new ReadProductsUseCase(productRespository);
export const readProductsUseCaseProvider = {
    provide: ReadProductsUseCase,
    useFactory: readProductsUseCaseFactory,
    deps: [ProductRepository]
}

const readProductsRecentlyCreateUseCaseFactory = (productRespository: ProductRepository) => new ReadProductsRecentlyCreateUseCase(productRespository);
export const readProductsRecentlyCreateUseCaseProvider = {
    provide: ReadProductsRecentlyCreateUseCase,
    useFactory: readProductsRecentlyCreateUseCaseFactory,
    deps: [ProductRepository]
}

const updateProductUseCaseFactory = (productRepository: ProductRepository) => new UpdateProductUseCase(productRepository);
export const updateProductUseCaseProvider = {
    provide: UpdateProductUseCase,
    useFactory: updateProductUseCaseFactory,
    deps: [ProductRepository],
};

const deleteProductUseCaseFactory = (productRepository: ProductRepository) => new DeleteProductUseCase(productRepository);
export const deleteProductUseCaseProvider = {
    provide: DeleteProductUseCase,
    useFactory: deleteProductUseCaseFactory,
    deps: [ProductRepository],
};

const readProductForNameUseCaseFactory = (productRepository: ProductRepository) => new ReadProductForNameUseCase(productRepository);
export const readProductForNameUseCaseProvider = {
    provide: ReadProductForNameUseCase,
    useFactory: readProductForNameUseCaseFactory,
    deps: [ProductRepository]
};
@NgModule({
    providers: [
        createProductsUseCaseProvider,
        readProductIdUseCaseProvider,
        readProductUseCaseUseCaseProvider,
        readProductsUseCaseProvider,
        readProductsRecentlyCreateUseCaseProvider,
        updateProductUseCaseProvider,
        deleteProductUseCaseProvider,
        readProductForNameUseCaseProvider,
        {provide: ProductRepository, useClass: ProductService}
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class ProductModule { }
