import { UserModel } from "@src/app/commons/domains/model/user/UserModel";
import { UserEntity } from "@app/commons/domains/entity/user/UserEntity";
import { Mapper } from "@src/app/commons/helpers/Mapper";

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