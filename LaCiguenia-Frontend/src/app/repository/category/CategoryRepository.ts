import { Observable } from "rxjs";
import { CategoryModel } from "@src/app/commons/domains/model/category/CategoryModel";


export abstract class CategoryRepository {
    abstract createCategory(categoryModel : CategoryModel): Observable<GenericResponseDTO>;
    abstract readCategory(params: {categoryId: number}): Observable<GenericResponseDTO>;
    abstract readCategories (): Observable<GenericResponseDTO>;
    abstract updateCategory (categoryModel : CategoryModel): Observable<GenericResponseDTO>;
    abstract deleteCategory (params: {categoryId: number}): Observable<GenericResponseDTO>;
}