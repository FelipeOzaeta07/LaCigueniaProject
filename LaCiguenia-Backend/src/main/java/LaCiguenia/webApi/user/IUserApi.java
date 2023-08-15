package LaCiguenia.webApi.user;

import LaCiguenia.commons.constans.endpoints.user.IUserEndPoint;
import LaCiguenia.commons.domains.dto.user.UserDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IUserApi {

    ResponseEntity<GenericResponseDTO> serviceUser(UserDTO userDTO);

    ResponseEntity<GenericResponseDTO> createUser(UserDTO userDTO);
}