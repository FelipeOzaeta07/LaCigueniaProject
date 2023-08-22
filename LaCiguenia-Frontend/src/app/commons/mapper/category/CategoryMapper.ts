import { CategoryModel } from "@src/app/commons/domains/model/category/CategoryModel";
import { CategoryEntity } from "@app/commons/domains/entity/category/CategoryEntity";
import { Mapper } from "@src/app/commons/helpers/Mapper";

export class CategoryMapper extends Mapper<CategoryEntity, CategoryModel>{
    override converterEntityToModel(params: CategoryEntity): CategoryModel {
        return{
            categoryId: params.categoryId,
            categoryName: params.CategoryName,
            categoryDescription: params.categoryDescription,
            listProducts: params.listProducts
        };
    }
    override converterModelToEntity(params: CategoryModel): CategoryEntity {
        return{
            categoryId: params.categoryId,
            CategoryName: params.categoryName,
            categoryDescription: params.categoryDescription,
            listProducts: params.listProducts
        };
    }
}