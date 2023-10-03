package LaCiguenia.webApi.customer;

import LaCiguenia.commons.domains.dto.customer.CustomerDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface ICustomerApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createCustomer(@RequestBody CustomerDTO customerDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readCustomer(@PathVariable String customerId);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readCustomers();
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateCustomer(@RequestBody CustomerDTO customerDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteCustomer(@PathVariable Integer customerId);
}