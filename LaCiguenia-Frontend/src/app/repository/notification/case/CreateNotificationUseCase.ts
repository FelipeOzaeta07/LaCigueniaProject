import { UseCase } from "@commons/helpers/UserCase";
import { GenericResponse } from "@commons/response/GenericResponse";
import { NotificationRepository } from "../NotificationRepository";
import { Observable } from "rxjs";

export class CreateNotificationUseCase implements UseCase<GenericResponse, GenericResponse>{

    constructor(private notificationRepository: NotificationRepository){}

    execute() : Observable<GenericResponse>{
        return this.notificationRepository.createNotification();
    }
}