package LaCiguenia.component.notification;

import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface INotificationComponent {
    ResponseEntity<GenericResponseDTO> createNotification ();
}