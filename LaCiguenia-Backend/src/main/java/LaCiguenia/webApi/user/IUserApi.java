package LaCiguenia.webApi.user;

import LaCiguenia.commons.constans.endpoints.user.IUserEndPoint;
import LaCiguenia.commons.domains.dto.user.UserDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IUserApi {
    @PostMapping(IUserEndPoint.USER_SERVICE)
    ResponseEntity<GenericResponseDTO> loginService(@RequestBody UserDTO userDTO);
    @PostMapping(IUserEndPoint.CREATE_ACOUNT)
    ResponseEntity<GenericResponseDTO> saveLogin(@RequestBody UserDTO userDTO);
}