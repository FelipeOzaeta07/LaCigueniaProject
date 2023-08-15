package LaCiguenia.service.user;

import LaCiguenia.commons.domains.dto.user.UserDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IUserService {
    ResponseEntity<GenericResponseDTO> userService(UserDTO userDTO);
    ResponseEntity<GenericResponseDTO> userCreate(UserDTO userDTO);
}