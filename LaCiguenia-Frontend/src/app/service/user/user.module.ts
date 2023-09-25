import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepository } from '@repository/user/UserRepository';
import { CreateUserUseCase } from '@repository/user/case/CreateUserUseCase';
import { ServiceUserUseCase } from '@repository/user/case/ServiceUserUseCase';
import { UserService } from '@service/user/implement/UserService';
import { HttpClientModule } from '@angular/common/http';
import { CloseSesionUserUseCase } from '@repository/user/case/CloseSesionUserUseCase';


const createUserUseCaseFactory = (userRepository: UserRepository) => new CreateUserUseCase(userRepository);
export const createUserUseCaseProvider = {
    provide: CreateUserUseCase,
    useFactory: createUserUseCaseFactory,
    deps: [UserRepository]
};

const serviceUserUseCaseFactory = (userRepository: UserRepository) => new ServiceUserUseCase(userRepository);
export const serviceUserUseCaseProvider = {
    provide: ServiceUserUseCase,
    useFactory: serviceUserUseCaseFactory,
    deps: [UserRepository]
};

const closeSesionUserCaseFactory = (userRepository: UserRepository) => new CloseSesionUserUseCase(userRepository);
export const closeSesionUserCaseProvider = {
    provide: CloseSesionUserUseCase,
    useFactory: closeSesionUserCaseFactory,
    deps: [UserRepository]
};


@NgModule({
    providers: [
        createUserUseCaseProvider,
        serviceUserUseCaseProvider,
        closeSesionUserCaseProvider,
        {provide: UserRepository, useClass: UserService}
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})

export class UserModule { }