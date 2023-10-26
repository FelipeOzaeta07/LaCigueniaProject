package LaCiguenia.commons.converter.detailExpense;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.detailExpense.DetailExpenseDTO;
import LaCiguenia.commons.domains.entity.detailExpense.DetailExpenseEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class DetailExpenseConverter {
    public DetailExpenseDTO convertDetailEntityToDetailDTO(DetailExpenseEntity detailExpenseEntity) {
        DetailExpenseDTO detailExpenseDTO = new DetailExpenseDTO();
        try {
            detailExpenseDTO = HelperMapper.modelMapper().map(detailExpenseEntity, DetailExpenseDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return detailExpenseDTO;
    }

    public DetailExpenseEntity convertDetailDTOToDetailEntity(DetailExpenseDTO detailExpenseDTO) {
        DetailExpenseEntity detailExpenseEntity = new DetailExpenseEntity();
        try {
            detailExpenseEntity = HelperMapper.modelMapper().map(detailExpenseDTO, DetailExpenseEntity.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return detailExpenseEntity;
    }
}