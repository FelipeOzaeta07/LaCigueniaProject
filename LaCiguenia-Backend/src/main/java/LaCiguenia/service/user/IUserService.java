package LaCiguenia.service.user;

import LaCiguenia.commons.domains.dto.user.UserDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IUserService {
    ResponseEntity<GenericResponseDTO> serviceUser(UserDTO userDTO);
    ResponseEntity<GenericResponseDTO> createUser(UserDTO userDTO);
    ResponseEntity<GenericResponseDTO> readUser(Integer userId);
    ResponseEntity<GenericResponseDTO> readUsers();
    ResponseEntity<GenericResponseDTO> updateUser(UserDTO userDTO);
    ResponseEntity<GenericResponseDTO> deleteUser(Integer userId);
}