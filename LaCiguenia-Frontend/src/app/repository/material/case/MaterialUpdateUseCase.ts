import { MaterialModel } from "@commons/domains/model/material/MaterialModel";
import { UseCase } from "@commons/helpers/UserCase";
import { MaterialRepository } from "@repository/material/MaterialRepository";
import { Observable } from "rxjs";
import { GenericResponse } from "@commons/response/GenericResponse";

export class MaterialUpdateUseCase implements UseCase<MaterialModel, GenericResponse>{

    constructor(private materialRepository: MaterialRepository){}

    execute(materialModel: MaterialModel) : Observable<GenericResponse>{
        return this.materialRepository.updateMaterial(materialModel);
    }
}