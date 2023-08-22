import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRepository } from '@src/app/repository/product/ProductRepository';
import { ProductCreateUseCase } from '@src/app/repository/product/case/ProductCreateUseCase';
import { ProductReadUseCase } from '@src/app/repository/product/case/ProductReadUseCase';
import { ProductsReadUseCase } from '@src/app/repository/product/case/ProductsReadUseCase';
import { ProductUpdateUseCase } from '@src/app/repository/product/case/ProductUpdateUseCase';
import { ProductDeleteUseCase } from '@src/app/repository/product/case/ProductDeleteUseCase';
import { ProductService } from '@app/service/product/service/ProductService';
import { HttpClientModule } from '@angular/common/http';


const productCreateUseCaseFactory = (productRepository: ProductRepository) => new ProductCreateUseCase(productRepository);
export const productCreateUseCaseProvider = {
    provide: ProductCreateUseCase,
    useFactory: productCreateUseCaseFactory,
    deps: [ProductRepository],
};
const productReadUseCaseFactory = (productRepository: ProductRepository) => new ProductReadUseCase(productRepository);
export const productReadUseCaseProvider = {
    provide: ProductReadUseCase,
    useFactory: productReadUseCaseFactory,
    deps: [ProductRepository],
};
const productsReadUseCaseFactory = (productRepository: ProductRepository) => new ProductsReadUseCase(productRepository);
export const productsReadUseCaseProvider = {
    provide: ProductsReadUseCase,
    useFactory: productsReadUseCaseFactory,
    deps: [ProductRepository],
};
const productUpdateUseCaseFactory = (productRepository: ProductRepository) => new ProductUpdateUseCase(productRepository);
export const productUpdateUseCaseProvider = {
    provide: ProductUpdateUseCase,
    useFactory: productUpdateUseCaseFactory,
    deps: [ProductRepository],
};
const productDeleteUseCaseFactory = (productRepository: ProductRepository) => new ProductDeleteUseCase(productRepository);
export const productDeleteUseCaseProvider = {
    provide: ProductDeleteUseCase,
    useFactory: productDeleteUseCaseFactory,
    deps: [ProductRepository],
};
@NgModule({
    providers: [
        productCreateUseCaseProvider,
        productReadUseCaseProvider,
        productsReadUseCaseProvider,
        productUpdateUseCaseProvider,
        productDeleteUseCaseProvider,
        {provide: ProductRepository, useClass: ProductService}
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class ProductModule { }
