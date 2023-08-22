import { Injectable } from "@angular/core";
import { CategoryMapper } from "@app/commons/mapper/category/CategoryMapper";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CategoryRepository } from "@src/app/repository/category/CategoryRepository";
import { CategoryModel } from "@src/app/commons/domains/model/category/CategoryModel";
import { Observable, catchError, throwError } from "rxjs";
import { BASE_URL_CATEGORY, CREATE_CATEGORY, DELETE_CATEGORY, READ_CATEGORIES, READ_CATEGORY, UPDATE_CATEGORY } from "../../../commons/endpoint/category/CategoryEndPoint";

@Injectable({
    providedIn: 'root'
})
export class CategoryService extends CategoryRepository {

    categoryMapper = new CategoryMapper();

    constructor(private http: HttpClient){
        super();
    }

    override createCategory(categoryModel: CategoryModel): Observable<GenericResponseDTO> {
        const categoryEntity = this.categoryMapper.converterModelToEntity(categoryModel);
    
        return this.http
            .post<GenericResponseDTO>(BASE_URL_CATEGORY + CREATE_CATEGORY, categoryEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
    
    override readCategory(params: { categoryId: number; }): Observable<GenericResponseDTO> {
        return this.http
            .get<GenericResponseDTO>(BASE_URL_CATEGORY + READ_CATEGORY, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readCategories(): Observable<GenericResponseDTO> {
        return this.http
        .get<GenericResponseDTO>(BASE_URL_CATEGORY + READ_CATEGORIES)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override updateCategory(categoryModel: CategoryModel): Observable<GenericResponseDTO> {
        const categoryEntity = this.categoryMapper.converterModelToEntity(categoryModel);
    
        return this.http
            .put<GenericResponseDTO>(BASE_URL_CATEGORY + UPDATE_CATEGORY, categoryEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteCategory(params: { categoryId: number; }): Observable<GenericResponseDTO> {
        return this.http
            .delete<GenericResponseDTO>(BASE_URL_CATEGORY + DELETE_CATEGORY, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
}