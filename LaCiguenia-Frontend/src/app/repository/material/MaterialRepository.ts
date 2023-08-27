import { MaterialModel } from "@commons/domains/model/material/MaterialModel";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export abstract class MaterialRepository {
    abstract createMaterial(materialModel : MaterialModel): Observable<GenericResponse>;
    abstract readMaterial(params: {materialId: number}): Observable<GenericResponse>;
    abstract readMaterials (): Observable<GenericResponse>;
    abstract updateMaterial (materialModel : MaterialModel): Observable<GenericResponse>;
    abstract deleteMaterial (params: {materialId: number}): Observable<GenericResponse>;
}