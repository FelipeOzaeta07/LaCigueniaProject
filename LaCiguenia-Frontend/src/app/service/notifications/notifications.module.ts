import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateNotificationUseCase } from '@repository/notification/case/CreateNotificationUseCase';
import { NotificationRepository } from '@repository/notification/NotificationRepository';
import { NotificationService } from '@service/notifications/implement/NotificationService';

const createNotificationUseCaseFactory = (notificationRepository: NotificationRepository) => new CreateNotificationUseCase(notificationRepository);
export const createNotificationUseCaseProvider = {
    provide: CreateNotificationUseCase,
    useFactory: createNotificationUseCaseFactory,
    deps: [NotificationRepository],
};

@NgModule({
  providers: [
    createNotificationUseCaseProvider,
    {provide: NotificationRepository, useClass: NotificationService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class NotificationsModule { }
