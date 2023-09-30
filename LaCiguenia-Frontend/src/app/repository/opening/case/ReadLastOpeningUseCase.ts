import { OpeningModel } from "@commons/domains/opening/OpeningModel";
import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { OpeningRepository } from "../OpeningRepository";
import { Observable } from "rxjs";

export class ReadLastOpeningUseCase implements UseCase<OpeningModel, GenericResponse>{

    constructor(private openingRepository: OpeningRepository){}

    execute() : Observable<GenericResponse>{
        return this.openingRepository.readLastOpening();
    }
}