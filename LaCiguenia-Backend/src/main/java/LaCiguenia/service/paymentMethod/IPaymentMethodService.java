package LaCiguenia.service.paymentMethod;

import LaCiguenia.commons.domains.dto.paymentMethod.PaymentMethodDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IPaymentMethodService {
    ResponseEntity<GenericResponseDTO> createPaymentMethod(PaymentMethodDTO paymentMethodDTO);
    ResponseEntity<GenericResponseDTO> readPaymentMethods();
    ResponseEntity<GenericResponseDTO> deletePaymentMethod(Integer PaymentMethodId);
}
