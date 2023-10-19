package LaCiguenia.commons.converter.paymentMethod;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.paymentMethod.PaymentMethodDTO;
import LaCiguenia.commons.domains.entity.paymentMethod.PaymentMethodEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class PaymentMethodConverter {
    public PaymentMethodDTO convertPaymentMethodEntityToPaymentMethodDTO(PaymentMethodEntity paymentMethodEntity) {
        PaymentMethodDTO paymentMethodDTO = new PaymentMethodDTO();
        try {
            paymentMethodDTO = HelperMapper.modelMapper().map(paymentMethodEntity, PaymentMethodDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return paymentMethodDTO;
    }

    public PaymentMethodEntity convertPaymentMethodDTOToPaymentMethodEntity(PaymentMethodDTO paymentMethodDTO) {
            PaymentMethodEntity paymentMethodEntity = new PaymentMethodEntity();
        try {
            paymentMethodEntity = HelperMapper.modelMapper().map(paymentMethodDTO, PaymentMethodEntity.class);

        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return paymentMethodEntity;
    }
}
