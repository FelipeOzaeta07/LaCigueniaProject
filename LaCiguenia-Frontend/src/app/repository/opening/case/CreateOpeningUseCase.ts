import { OpeningModel } from "@commons/domains/opening/OpeningModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { OpeningRepository } from "../OpeningRepository";
import { Observable } from "rxjs";

export class CreateOpeningUseCase implements UseCase<OpeningModel, GenericResponse>{

    constructor(private openingRepository: OpeningRepository){}

    execute(openingModel: OpeningModel) : Observable<GenericResponse>{
        return this.openingRepository.createOpening(openingModel);
    }
}