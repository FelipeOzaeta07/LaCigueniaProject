import { Observable } from "rxjs";

export interface UseCaseVoid<S>{
    execute(param :S): any
}