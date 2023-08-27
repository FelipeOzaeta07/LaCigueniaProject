import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepository } from '@repository/user/UserRepository';
import { UserCreateUseCase } from '@repository/user/case/UserCreateUseCase';
import { UserServiceUseCase } from '@repository/user/case/UserServiceUseCase';
import { UserService } from '@service/user/implement/UserService';
import { HttpClientModule } from '@angular/common/http';


const userCreateUseCaseFactory = (userRepository: UserRepository) => new UserCreateUseCase(userRepository);
export const userCreateUseCaseProvider = {
    provide: UserCreateUseCase,
    useFactory: userCreateUseCaseFactory,
    deps: [UserRepository]
};
const userServiceUseCaseFactory = (userRepository: UserRepository) => new UserServiceUseCase(userRepository);
export const userServiceUseCaseProvider = {
    provide: UserServiceUseCase,
    useFactory: userServiceUseCaseFactory,
    deps: [UserRepository]
};


@NgModule({
    providers: [
        userCreateUseCaseProvider,
        userServiceUseCaseProvider,
        {provide: UserRepository, useClass: UserService}
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})export class UserModule { }
