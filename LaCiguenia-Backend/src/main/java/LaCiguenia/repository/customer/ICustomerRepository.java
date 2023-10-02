package LaCiguenia.repository.customer;

import LaCiguenia.commons.domains.entity.customer.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ICustomerRepository extends JpaRepository<CustomerEntity, Integer> {
    @Query(value = "SELECT MAX(customer_id) AS end_id FROM customer_ciguenia;", nativeQuery = true)
    Integer lastCustomerId ();
    @Query(value = "SELECT * FROM customer_ciguenia WHERE customer_identification " +
                   "= :customerIdentification", nativeQuery = true)
    Optional<CustomerEntity> findByCustomerIdentification(@Param("customerIdentification") String customerIdentification);
}