package LaCiguenia.repository.detailExpense;

import LaCiguenia.commons.domains.entity.detailExpense.DetailExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDetailExpenseRepository extends JpaRepository<DetailExpenseEntity, Integer> {
}