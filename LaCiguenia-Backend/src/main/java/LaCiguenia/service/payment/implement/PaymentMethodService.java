package LaCiguenia.service.payment.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.payment.IPaymentMethodResponse;
import LaCiguenia.commons.converter.payment.PaymentMethodConverter;
import LaCiguenia.commons.domains.dto.payment.PaymentMethodDTO;
import LaCiguenia.commons.domains.entity.payment.PaymentMethodEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.commons.domains.wrapper.IDetailExpenseForPayment;
import LaCiguenia.repository.payment.IPaymentMethodRepository;
import LaCiguenia.service.payment.IPaymentMethodService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class PaymentMethodService implements IPaymentMethodService {
    @Autowired
    private IPaymentMethodRepository iPaymentMethodRepository;
    @Autowired
    private PaymentMethodConverter paymentMethodConverter;

    @Override
    public ResponseEntity<GenericResponseDTO> createPaymentMethod(PaymentMethodDTO paymentMethodDTO) {
        try {
            Optional<PaymentMethodEntity> paymentMethodExist =
                    this.iPaymentMethodRepository.findById(paymentMethodDTO.getPaymentMethodId());
            if (!paymentMethodExist.isPresent()){
                PaymentMethodEntity paymentMethodEntity =
                        this.paymentMethodConverter.convertPaymentMethodDTOToPaymentMethodEntity(paymentMethodDTO);
                paymentMethodEntity.setPaymentMethodStatus("Activo");
                this.iPaymentMethodRepository.save(paymentMethodEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.CREATE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IPaymentMethodResponse.PAYMENT_METHOD_FAIL)
                        .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                        .build());
            }
        }catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readPaymentMethods() {
        try {
            List<PaymentMethodEntity> listPaymentMethodEntity =
                    this.iPaymentMethodRepository.findPaymentMethodEnabled();
            if (!listPaymentMethodEntity.isEmpty()){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(listPaymentMethodEntity)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }
            else {
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IPaymentMethodResponse.PAYMENT_METHOD_NO_FIND)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }
        }catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> deletePaymentMethod(Integer PaymentMethodId) {
        try {
            Optional<PaymentMethodEntity> paymentMethodExist =
                    this.iPaymentMethodRepository.findById(PaymentMethodId);
            if (paymentMethodExist.isPresent()){
                paymentMethodExist.get().setPaymentMethodStatus("Inactivo");
                this.iPaymentMethodRepository.save(paymentMethodExist.get());
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.DELETE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(null)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e) {
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