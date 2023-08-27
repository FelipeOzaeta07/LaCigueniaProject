import { UserModel } from "@commons/domains/model/user/UserModel";
import { UserEntity } from "@commons/domains/entity/user/UserEntity";
import { Mapper } from "@commons/helpers/Mapper";

export class UserMapper extends Mapper<UserEntity, UserModel>{
    override converterEntityToModel(params: UserEntity): UserModel {
        return{
            userId: params.userId,
            userName: params.userName,
            userEmail: params.userEmail,
            userPassword: params.userPassword
        };
    }
    override converterModelToEntity(params: UserModel): UserEntity {
        return{
            userId: params.userId,
            userName: params.userName,
            userEmail: params.userEmail,
            userPassword: params.userPassword
        };
    }
}