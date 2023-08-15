import { UserModel } from "src/app/domains/model/user/UserModel";
import { UserEntity } from "../entity/UserEntity";
import { Mapper } from "src/app/base/Mapper";

export class UserMapper extends Mapper<UserEntity, UserModel>{
    override converterEntityToModel(params: UserEntity): UserModel {
        return{
            userId: params.userId,
            userEmail: params.userEmail,
            userPassword: params.userPassword
        };
    }
    override converterModelToEntity(params: UserModel): UserEntity {
        return{
            userId: params.userId,
            userEmail: params.userEmail,
            userPassword: params.userPassword
        };
    }
}