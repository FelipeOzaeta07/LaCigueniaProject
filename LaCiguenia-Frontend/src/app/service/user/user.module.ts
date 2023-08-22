import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepository } from '@src/app/repository/user/UserRepository';
import { UserCreateUseCase } from '@src/app/repository/user/case/UserCreateUseCase';
import { UserServiceUseCase } from '@src/app/repository/user/case/UserServiceUseCase';
import { UserService } from '@app/service/user/service/UserService';
import { HttpClientModule } from '@angular/common/http';



const userCreateUseCaseFactory = (userRepository: UserRepository) => new UserCreateUseCase(userRepository);
export const userCreateUseCaseProvider = {
    provide: UserCreateUseCase,
    useFactory: userCreateUseCaseFactory,
    deps: [UserRepository],
};
const userServiceUseCaseFactory = (userRepository: UserRepository) => new UserServiceUseCase(userRepository);
export const userServiceUseCaseProvider = {
    provide: UserServiceUseCase,
    useFactory: userServiceUseCaseFactory,
    deps: [UserRepository],
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
