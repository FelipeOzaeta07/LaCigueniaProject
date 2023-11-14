import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRepository } from '@repository/user/UserRepository';
import { CreateUserUseCase } from '@repository/user/case/CreateUserUseCase';
import { ServiceUserUseCase } from '@repository/user/case/ServiceUserUseCase';
import { UserService } from '@service/user/implement/UserService';
import { HttpClientModule } from '@angular/common/http';
import { CloseSesionUserUseCase } from '@repository/user/case/CloseSesionUserUseCase';
import { ReadUserUseCase } from '@repository/user/case/ReadUserUseCase';
import { UserSharedGetDataUseCase } from '@repository/user/case/UserSharedGetDataUseCase';
import { UserSharedRepository } from '@repository/user/UserSharedRepository';
import { UserSharedService } from './implement/UserSharedService';
import { UserSharedSetDataUserCase } from '@repository/user/case/UserSharedSetDataUserCase';
import { UpdateUserUseCase } from '@repository/user/case/UpdateUserUseCase';


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

const readUserCaseFactory = (userRepository: UserRepository) => new ReadUserUseCase(userRepository);
export const readUserCaseProvider = {
    provide: ReadUserUseCase,
    useFactory: readUserCaseFactory,
    deps: [UserRepository]
};

const updateUserUseCaseFactory = (userRepository: UserRepository) => new UpdateUserUseCase(userRepository);
export const updateUserUseCaseProvider = {
    provide: UpdateUserUseCase,
    useFactory: updateUserUseCaseFactory,
    deps: [UserRepository]
};

const userSharedGetDataFactory = (userSharedRepository: UserSharedRepository) => new UserSharedGetDataUseCase(userSharedRepository);
export const userSharedGetDataProvider = {
    provide: UserSharedGetDataUseCase,
    useFactory: userSharedGetDataFactory,
    deps: [UserSharedRepository]
};

const userSharedSetDataFactory = (userSharedRepository: UserSharedRepository) => new UserSharedSetDataUserCase(userSharedRepository);
export const userSharedSetDataProvider = {
    provide: UserSharedSetDataUserCase,
    useFactory: userSharedSetDataFactory,
    deps: [UserSharedRepository]
};

@NgModule({
    providers: [
        createUserUseCaseProvider,
        serviceUserUseCaseProvider,
        closeSesionUserCaseProvider,
        readUserCaseProvider,
        updateUserUseCaseProvider,
        {provide: UserRepository, useClass: UserService},
        userSharedGetDataProvider,
        userSharedSetDataProvider,
        {provide: UserSharedRepository, useClass: UserSharedService}
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})

export class UserModule { }