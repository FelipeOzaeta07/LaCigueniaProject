package LaCiguenia.webApi.notification.implement;

import LaCiguenia.commons.constans.endpoints.notification.INotificationEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.component.notification.implement.NotificationComponent;
import LaCiguenia.webApi.notification.INotificationApi;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(INotificationEndPoint.BASE_URL_NOTIFICATION)
@Tag(name = "Sistema de Gestión de Notificaciones", description = "Crear Notificaciones")
@Log4j2
public class NotificationApi implements INotificationApi {

    private final NotificationComponent notificationComponent;

    public NotificationApi(NotificationComponent notificationComponent) {
        this.notificationComponent = notificationComponent;
    }

    @Override
    @Operation(summary = "Crear una nueva notificacion")
    @ApiResponses(value = {
            @ApiResponse(responseCode  = "200", description = GeneralResponse.CREATE_SUCCESS,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponseDTO.class))}),
            @ApiResponse(responseCode  = "400", description = GeneralResponse.CREATE_FAIL,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = String.class))}),
            @ApiResponse(responseCode  = "404", description = GeneralResponse.NOT_FOUND,
                    content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode  = "500", description = GeneralResponse.INTERNAL_SERVER,
                    content = {@Content(mediaType = "application/json")})})
    @GetMapping(INotificationEndPoint.CREATE_NOTIFICATION)
    public ResponseEntity<GenericResponseDTO> createNotification () {
        return this.notificationComponent.createNotification();
    }
}