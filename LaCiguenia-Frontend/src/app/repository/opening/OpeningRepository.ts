import { OpeningModel } from "@commons/domains/model/opening/OpeningModel";
import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";


export abstract class OpeningRepository {
    abstract createOpening(openingModel : OpeningModel): Observable<GenericResponse>;
}