import { NgModule } from "@angular/core";
import { UserRepository } from "../domains/repository/user/UserRepository";
import { UserService } from "./service/user/UserService";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { UserCreateUserCase } from "../domains/case/user/UserCreateUserCase";
import { UserServiceUserCase } from "../domains/case/user/UserServiceUserCase";

const userCreateUseCaseFactory = (userRepository: UserRepository) => new UserCreateUserCase(userRepository);
export const userCreateUseCaseProvider = {
    provide: UserCreateUserCase,
    useFactory: userCreateUseCaseFactory,
    deps: [UserRepository],
};
const userServiceUserCaseFactory = (userRepository: UserRepository) => new UserServiceUserCase(userRepository);
export const userServiceUserCaseProvider = {
    provide: UserServiceUserCase,
    useFactory: userServiceUserCaseFactory,
    deps: [UserRepository],
};

@NgModule({
    providers: [
        userCreateUseCaseProvider,
        userServiceUserCaseProvider,
        {provide: UserRepository, useClass: UserService},
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class DataModule{}