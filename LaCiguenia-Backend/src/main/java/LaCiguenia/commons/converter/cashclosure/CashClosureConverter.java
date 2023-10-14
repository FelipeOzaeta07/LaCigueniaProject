package LaCiguenia.commons.converter.cashclosure;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.cashclosure.CashClosureDTO;
import LaCiguenia.commons.domains.entity.cashclosure.CashClosureEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class CashClosureConverter {
    public CashClosureDTO convertCashClosureEntityToCashClosureDTO(CashClosureEntity cashClosureEntity) {
        CashClosureDTO cashClosureDTO = new CashClosureDTO();
        try {
            cashClosureDTO = HelperMapper.modelMapper().map(cashClosureEntity, CashClosureDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return cashClosureDTO;
    }

    public CashClosureEntity convertCashClosureDTOToCashClosureEntity(CashClosureDTO cashClosureDTO) {
        CashClosureEntity cashClosureEntity = new CashClosureEntity();
        try {
            cashClosureEntity = HelperMapper.modelMapper().map(cashClosureDTO, CashClosureEntity.class);

        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return cashClosureEntity;
    }
}