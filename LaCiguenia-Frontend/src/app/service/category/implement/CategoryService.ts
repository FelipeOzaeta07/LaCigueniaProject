import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CategoryRepository } from "@repository/category/CategoryRepository";
import { CategoryModel } from "@commons/domains/category/CategoryModel";
import { Observable, catchError, throwError } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";
import { BASE_URL_CATEGORY, CREATE_CATEGORY, DELETE_CATEGORY, READ_CATEGORIES, READ_CATEGORY, UPDATE_CATEGORY } from "../../../commons/endpoint/category/CategoryEndPoint";

@Injectable({
    providedIn: 'root'
})
export class CategoryService extends CategoryRepository {

    constructor(private http: HttpClient){
        super();
    }

    override createCategory(categoryModel: CategoryModel): Observable<GenericResponse> {
    
        return this.http
            .post<GenericResponse>(BASE_URL_CATEGORY + CREATE_CATEGORY, categoryModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
    
    override readCategory(params: { categoryId: number; }): Observable<GenericResponse> {
        return this.http
            .get<GenericResponse>(BASE_URL_CATEGORY + READ_CATEGORY, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readCategories(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_CATEGORY + READ_CATEGORIES)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override updateCategory(categoryModel: CategoryModel): Observable<GenericResponse> {
    
        return this.http
            .put<GenericResponse>(BASE_URL_CATEGORY + UPDATE_CATEGORY, categoryModel)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteCategory(params: { categoryId: number; }): Observable<GenericResponse> {
        return this.http
            .delete<GenericResponse>(BASE_URL_CATEGORY + DELETE_CATEGORY, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
}