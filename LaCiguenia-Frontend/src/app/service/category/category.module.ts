import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRepository } from '@repository/category/CategoryRepository';
import { DeleteCategoryUseCase } from '@repository/category/case/DeleteCategoryUseCase';
import { UpdateCategoryUseCase } from '@repository/category/case/UpdateCategoryUseCase';
import { ReadCategoriesUseCase } from '@repository/category/case/ReadCategoriesUseCase';
import { CreateCategoryUseCase } from '@repository/category/case/CreateCategoryUseCase';
import { ReadCategoryUseCase } from '@repository/category/case/ReadCategoryUseCase';
import { CategoryService } from '@service/category/implement/CategoryService';
import { HttpClientModule } from '@angular/common/http';


const createCategoryUseCaseFactory = (categoryRepository: CategoryRepository) => new CreateCategoryUseCase(categoryRepository);
export const createCategoryUseCaseProvider = {
    provide: CreateCategoryUseCase,
    useFactory: createCategoryUseCaseFactory,
    deps: [CategoryRepository],
};
const readCategoryUseCaseFactory = (categoryRepository: CategoryRepository) => new ReadCategoryUseCase(categoryRepository);
export const readCategoryUseCaseProvider = {
    provide: ReadCategoryUseCase,
    useFactory: readCategoryUseCaseFactory,
    deps: [CategoryRepository],
};
const readCategoriesUseCaseFactory = (categoryRepository: CategoryRepository) => new ReadCategoriesUseCase(categoryRepository);
export const readCategoriesUseCaseProvider = {
    provide: ReadCategoriesUseCase,
    useFactory: readCategoriesUseCaseFactory,
    deps: [CategoryRepository],
};
const updateCategoryUseCaseFactory = (categoryRepository: CategoryRepository) => new UpdateCategoryUseCase(categoryRepository);
export const updateCategoryUseCaseProvider = {
    provide: UpdateCategoryUseCase,
    useFactory: updateCategoryUseCaseFactory,
    deps: [CategoryRepository],
};
const deleteCategoryUseCaseFactory = (categoryRepository: CategoryRepository) => new DeleteCategoryUseCase(categoryRepository);
export const deleteCategoryUseCaseProvider = {
    provide: DeleteCategoryUseCase,
    useFactory: deleteCategoryUseCaseFactory,
    deps: [CategoryRepository],
};

@NgModule({
    providers: [
        createCategoryUseCaseProvider,
        readCategoryUseCaseProvider,
        readCategoriesUseCaseProvider,
        updateCategoryUseCaseProvider,
        deleteCategoryUseCaseProvider,
        {provide: CategoryRepository, useClass: CategoryService}
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class CategoryModule { }
