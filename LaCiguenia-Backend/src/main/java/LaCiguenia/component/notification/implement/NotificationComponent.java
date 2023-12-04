package LaCiguenia.component.notification.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.notification.NotificationDTO;
import LaCiguenia.commons.domains.entity.inventory.InventoryEntity;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.component.notification.INotificationComponent;
import LaCiguenia.repository.inventory.IInventoryRepository;
import LaCiguenia.repository.product.IProductRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class NotificationComponent implements INotificationComponent {

    private final IProductRepository iProductRepository;
    private final IInventoryRepository iInventoryRepository;

    public NotificationComponent(IProductRepository iProductRepository, IInventoryRepository iInventoryRepository) {
        this.iProductRepository = iProductRepository;
        this.iInventoryRepository = iInventoryRepository;
    }

    @Override
    public ResponseEntity<GenericResponseDTO> createNotification() {
        try {
            List<ProductEntity> listProductExist = this.iProductRepository.findProductsEnabled();
            if (!listProductExist.isEmpty()) {
                List<NotificationDTO> listNotificationExist = new ArrayList<>();

                for (ProductEntity product : listProductExist) {
                    Optional<InventoryEntity> inventoryEntity = this.iInventoryRepository.findById(product.getProductId());

                    inventoryEntity.ifPresent(inventory -> {
                        if (inventory.getInventoryAmount() < 25) {
                            NotificationDTO notificationDTO = new NotificationDTO();
                            notificationDTO.setNotificationMessage("Nuevo Mensaje " +
                                    product.getProductName() + " nueva cantidad " +
                                    inventory.getInventoryAmount());
                            listNotificationExist.add(notificationDTO);
                        }
                    });
                }

                if (!listNotificationExist.isEmpty()) {
                    return ResponseEntity.ok(GenericResponseDTO.builder()
                            .message("Notificaciones Exitosas")
                            .objectResponse(listNotificationExist)
                            .statusCode(HttpStatus.OK.value())
                            .build());
                } else {
                    return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                            .message("No Existen Notificaciones")
                            .objectResponse(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .build());
                }
            } else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message("No Existen Productos")
                        .objectResponse(null)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e){
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }
}