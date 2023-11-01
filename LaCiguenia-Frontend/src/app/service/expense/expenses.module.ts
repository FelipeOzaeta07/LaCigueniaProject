import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpenseRepository } from '@repository/expense/ExpenseRepository';
import { CreateExpenseUseCase } from '@repository/expense/case/CreateExpenseUseCase';
import { DeleteExpenseUseCase } from '@repository/expense/case/DeleteExpenseUseCase';
import { UpdateExpenseUseCase } from '@repository/expense/case/UpdateExpenseUseCase';
import { ReadLastExpenseUseCase } from '@repository/expense/case/ReadLastExpenseUseCase';
import { ExpenseService } from '@service/expense/implement/ExpenseService';

const createExpenseUseCaseFactory = (expenseRepository: ExpenseRepository) => new CreateExpenseUseCase(expenseRepository);
export const createExpenseUseCaseProvider = {
    provide: CreateExpenseUseCase,
    useFactory: createExpenseUseCaseFactory,
    deps: [ExpenseRepository],
};

const readLastExpenseUseCaseFactory = (expenseRepository: ExpenseRepository) => new ReadLastExpenseUseCase(expenseRepository);
export const readLastExpenseUseCaseProvider = {
    provide: ReadLastExpenseUseCase,
    useFactory: readLastExpenseUseCaseFactory,
    deps: [ExpenseRepository],
};

const updateExpenseUseCaseFactory = (expenseRepository: ExpenseRepository) => new UpdateExpenseUseCase(expenseRepository);
export const updateExpenseUseCaseProvider = {
    provide: UpdateExpenseUseCase,
    useFactory: updateExpenseUseCaseFactory,
    deps: [ExpenseRepository],
};

const deleteProductUseCaseFactory = (expenseRepository: ExpenseRepository) => new DeleteExpenseUseCase(expenseRepository);
export const deleteExpenseUseCaseProvider = {
    provide: DeleteExpenseUseCase,
    useFactory: deleteProductUseCaseFactory,
    deps: [ExpenseRepository],
};

@NgModule({
  providers: [
    createExpenseUseCaseProvider,
    readLastExpenseUseCaseProvider,
    updateExpenseUseCaseProvider,
    deleteExpenseUseCaseProvider,
    {provide: ExpenseRepository, useClass: ExpenseService}
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class ExpensesModule { }
