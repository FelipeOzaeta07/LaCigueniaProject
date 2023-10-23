package LaCiguenia.repository.payment;

import LaCiguenia.commons.domains.entity.payment.PaymentMethodEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IPaymentMethodRepository extends JpaRepository<PaymentMethodEntity, Integer> {
    @Query(value =  "SELECT * FROM payment_method_ciguenia " +
                    "WHERE payment_method_status = 'Activo'", nativeQuery = true)
    List<PaymentMethodEntity> findPaymentMethodEnabled();
}