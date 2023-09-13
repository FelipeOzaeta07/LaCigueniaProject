import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MaterialModel } from "@commons/domains/material/MaterialModel";
import { BASE_URL_MATERIAL, CREATE_MATERIAL, DELETE_MATERIAL, READ_MATERIAL, READ_MATERIALS, UPDATE_MATERIAL } from "@commons/endpoint/material/MaterialEndPoint";
import { MaterialMapper } from "@commons/mapper/material/MaterialMapper";
import { MaterialRepository } from "@repository/material/MaterialRepository";
import { Observable, catchError, throwError } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

@Injectable({
    providedIn: 'root'
})
export class MaterialService extends MaterialRepository {

    materialMapper = new MaterialMapper();

    constructor(private http: HttpClient){
        super();
    }

    override createMaterial(materialModel: MaterialModel): Observable<GenericResponse> {
        const materialEntity = this.materialMapper.converterModelToEntity(materialModel);
    
        return this.http
            .post<GenericResponse>(BASE_URL_MATERIAL + CREATE_MATERIAL, materialEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readMaterial(params: { materialId: number; }): Observable<GenericResponse> {
        return this.http
            .get<GenericResponse>(BASE_URL_MATERIAL + READ_MATERIAL, {params})
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override readMaterials(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>(BASE_URL_MATERIAL + READ_MATERIALS)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }

    override updateMaterial(materialModel: MaterialModel): Observable<GenericResponse> {
        const materialEntity = this.materialMapper.converterModelToEntity(materialModel);
    
        return this.http
            .post<GenericResponse>(BASE_URL_MATERIAL + UPDATE_MATERIAL, materialEntity)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

    override deleteMaterial(params: { materialId: number; }): Observable<GenericResponse> {
    
        return this.http
            .post<GenericResponse>(BASE_URL_MATERIAL + DELETE_MATERIAL, params)
            .pipe(catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }
}