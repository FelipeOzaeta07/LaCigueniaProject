package LaCiguenia.webApi.user;

import LaCiguenia.commons.domains.dto.user.UserDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IUserApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> serviceUser(@RequestBody UserDTO userDTO);
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createUser(@RequestBody UserDTO userDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readUser(@PathVariable Integer userId);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readUsers();
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateUser(@RequestBody UserDTO userDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteUser(@PathVariable Integer userId);
}