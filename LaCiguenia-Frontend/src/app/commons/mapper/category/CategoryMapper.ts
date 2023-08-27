import { CategoryModel } from "@commons/domains/model/category/CategoryModel";
import { CategoryEntity } from "@commons/domains/entity/category/CategoryEntity";
import { Mapper } from "@commons/helpers/Mapper";

export class CategoryMapper extends Mapper<CategoryEntity, CategoryModel>{
    override converterEntityToModel(params: CategoryEntity): CategoryModel {
        return{
            categoryId: params.categoryId,
            categoryName: params.categoryName,
            categoryDescription: params.categoryDescription
        };
    }
    override converterModelToEntity(params: CategoryModel): CategoryEntity {
        return{
            categoryId: params.categoryId,
            categoryName: params.categoryName,
            categoryDescription: params.categoryDescription
        };
    }
}