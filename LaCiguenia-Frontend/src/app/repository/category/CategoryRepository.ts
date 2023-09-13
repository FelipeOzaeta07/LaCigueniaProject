import { Observable } from "rxjs";
import { CategoryModel } from "@commons/domains/category/CategoryModel";
import { GenericResponse } from "@commons/response/GenericResponse";

export abstract class CategoryRepository {
    abstract createCategory(categoryModel : CategoryModel): Observable<GenericResponse>;
    abstract readCategory(params: {categoryId: number}): Observable<GenericResponse>;
    abstract readCategories (): Observable<GenericResponse>;
    abstract updateCategory (categoryModel : CategoryModel): Observable<GenericResponse>;
    abstract deleteCategory (params: {categoryId: number}): Observable<GenericResponse>;
}