package LaCiguenia.commons.converter.expense;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.expense.ExpenseDTO;
import LaCiguenia.commons.domains.entity.expense.ExpenseEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class ExpenseConverter {
    public ExpenseDTO convertExpenseEntityToExpenseDTO(ExpenseEntity expenseEntity) {
        ExpenseDTO expenseDTO = new ExpenseDTO();
        try {
            expenseDTO = HelperMapper.modelMapper().map(expenseEntity, ExpenseDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return expenseDTO;
    }

    public ExpenseEntity convertExpenseDTOToExpenseEntity(ExpenseDTO expenseDTO) {
        ExpenseEntity expenseEntity = new ExpenseEntity();
        try {
            expenseEntity = HelperMapper.modelMapper().map(expenseDTO, ExpenseEntity.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return expenseEntity;
    }
}