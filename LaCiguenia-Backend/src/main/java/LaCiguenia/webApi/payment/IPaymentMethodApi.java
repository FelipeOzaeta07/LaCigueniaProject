package LaCiguenia.webApi.payment;

import LaCiguenia.commons.domains.dto.payment.PaymentMethodDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IPaymentMethodApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createPaymentMethod(@RequestBody PaymentMethodDTO paymentMethodDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readPaymentMethods();
    @PostMapping()
    ResponseEntity<GenericResponseDTO> deletePaymentMethod(@PathVariable Integer PaymentMethodId);
}