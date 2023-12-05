package LaCiguenia.webApi.notification;

import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

public interface INotificationApi {
    @GetMapping()
    ResponseEntity<GenericResponseDTO> createNotification ();
}