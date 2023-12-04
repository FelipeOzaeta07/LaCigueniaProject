import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL_NOTIFICATION, CREATE_NOTIFICATION } from "@commons/endpoint/notification/NotificationEndPoint";
import { GenericResponse } from "@commons/response/GenericResponse";
import { NotificationRepository } from "@repository/notification/NotificationRepository";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NotificationService extends NotificationRepository {

    constructor(private http: HttpClient){
        super();
    }
    
    override createNotification(): Observable<GenericResponse> {
        return this.http
        .get<GenericResponse>( BASE_URL_NOTIFICATION + CREATE_NOTIFICATION)
        .pipe(catchError((error: HttpErrorResponse) => {
            return throwError(error);
        }));
    }
}