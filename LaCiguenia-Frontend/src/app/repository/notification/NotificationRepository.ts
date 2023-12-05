import { GenericResponse } from "@commons/response/GenericResponse";
import { Observable } from "rxjs";

export abstract class NotificationRepository {
    abstract createNotification(): Observable<GenericResponse>;
}