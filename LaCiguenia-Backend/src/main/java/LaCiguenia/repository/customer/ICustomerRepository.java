package LaCiguenia.repository.customer;

import LaCiguenia.commons.domains.entity.customer.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerRepository extends JpaRepository<CustomerEntity, Integer> { }