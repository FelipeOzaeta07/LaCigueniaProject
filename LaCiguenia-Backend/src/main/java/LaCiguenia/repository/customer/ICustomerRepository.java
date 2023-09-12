package LaCiguenia.repository.customer;

import LaCiguenia.commons.domains.entity.customer.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ICustomerRepository extends JpaRepository<CustomerEntity, Integer> {
    Optional<CustomerEntity> findByCustomerIdentification(String customerIdentification);
    @Query(value = "SELECT MAX(customer_id) AS end_id FROM customer_ciguenia;", nativeQuery = true)
    Integer lastCustomerId ();
}