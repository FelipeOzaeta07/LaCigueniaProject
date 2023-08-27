import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRepository } from '@repository/category/CategoryRepository';
import { CategoryDeleteUseCase } from '@repository/category/case/CategoryDeleteUseCase';
import { CategoryUpdateUseCase } from '@repository/category/case/CategoryUpdateUseCase';
import { CategoriesReadUseCase } from '@repository/category/case/CategoriesReadUseCase';
import { CategoryCreateUseCase } from '@repository/category/case/CategoryCreateUseCase';
import { CategoryReadUseCase } from '@repository/category/case/CategoryReadUseCase';
import { CategoryService } from '@service/category/implement/CategoryService';
import { HttpClientModule } from '@angular/common/http';


const categoryCreateUseCaseFactory = (categoryRepository: CategoryRepository) => new CategoryCreateUseCase(categoryRepository);
export const categoryCreateUseCaseProvider = {
    provide: CategoryCreateUseCase,
    useFactory: categoryCreateUseCaseFactory,
    deps: [CategoryRepository],
};
const categoryReadUseCaseFactory = (categoryRepository: CategoryRepository) => new CategoryReadUseCase(categoryRepository);
export const categoryReadUseCaseProvider = {
    provide: CategoryReadUseCase,
    useFactory: categoryReadUseCaseFactory,
    deps: [CategoryRepository],
};
const categoriesReadUseCaseFactory = (categoryRepository: CategoryRepository) => new CategoriesReadUseCase(categoryRepository);
export const categoriesReadUseCaseProvider = {
    provide: CategoriesReadUseCase,
    useFactory: categoriesReadUseCaseFactory,
    deps: [CategoryRepository],
};
const categoryUpdateUseCaseFactory = (categoryRepository: CategoryRepository) => new CategoryUpdateUseCase(categoryRepository);
export const categoryUpdateUseCaseProvider = {
    provide: CategoryUpdateUseCase,
    useFactory: categoryUpdateUseCaseFactory,
    deps: [CategoryRepository],
};
const categoryDeleteUseCaseFactory = (categoryRepository: CategoryRepository) => new CategoryDeleteUseCase(categoryRepository);
export const categoryDeleteUseCaseProvider = {
    provide: CategoryDeleteUseCase,
    useFactory: categoryDeleteUseCaseFactory,
    deps: [CategoryRepository],
};

@NgModule({
    providers: [
        categoryCreateUseCaseProvider,
        categoryReadUseCaseProvider,
        categoriesReadUseCaseProvider,
        categoryUpdateUseCaseProvider,
        categoryDeleteUseCaseProvider,
        {provide: CategoryRepository, useClass: CategoryService}
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class CategoryModule { }
