package LaCiguenia.service.product.complement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.component.product.implement.ProductComponent;
import LaCiguenia.repository.product.IProductRepository;
import LaCiguenia.service.product.IProductComplementService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Component
@Log4j2
public class ProductComplementService implements IProductComplementService {
    @Autowired
    private IProductRepository iProductRepository;
    @Autowired
    private ProductComponent productComponent;
    @Override
    public ResponseEntity<GenericResponseDTO> readProductsFour() {
        try{
            Date day = Date.valueOf(LocalDate.now());
            List<ProductEntity> listProduct = this.iProductRepository.findByDateDay(day);
            if (!listProduct.isEmpty()) {
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(listProduct)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            } else{
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(listProduct)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        } catch (Exception e){
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
