import { MaterialModel } from "@commons/domains/model/material/MaterialModel";
import { UseCase } from "@commons/helpers/UserCase";
import { MaterialRepository } from "@repository/material/MaterialRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class MaterialReadUseCase implements UseCase<MaterialModel, GenericResponse>{

    constructor(private materialRepository: MaterialRepository){}

    execute(params: {materialId: number}) : Observable<GenericResponse>{
        return this.materialRepository.readMaterial(params);
    }
}