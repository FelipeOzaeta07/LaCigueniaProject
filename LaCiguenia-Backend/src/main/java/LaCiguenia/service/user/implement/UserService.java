package LaCiguenia.service.user.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.user.IUserResponse;
import LaCiguenia.commons.converter.user.UserConverter;
import LaCiguenia.commons.domains.dto.user.UserDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.commons.domains.entity.user.UserEntity;
import LaCiguenia.repository.user.IUserRepository;
import LaCiguenia.service.user.IUserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
@Log4j2
public class UserService implements IUserService {

    private final IUserRepository iUserRepository;

    private final UserConverter userConverter;

    public UserService(IUserRepository iUserRepository, UserConverter userConverter) {
        this.iUserRepository = iUserRepository;
        this.userConverter = userConverter;
    }

    @Override
    public ResponseEntity<GenericResponseDTO> serviceUser(UserDTO userDTO) {
        try {
            List<UserEntity> usuarios = iUserRepository.findUsers();
            if (!usuarios.isEmpty()) {
                for (UserEntity usuario : usuarios) {
                    UserDTO usuarioDecode = userConverter.convertUserEntityToUserDTO(usuario);
                    if (usuarioDecode.getUserPassword().equals(userDTO.getUserPassword()) &&
                            usuarioDecode.getUserEmail().equals(userDTO.getUserEmail())) {
                        return ResponseEntity.ok(GenericResponseDTO.builder()
                                .message(GeneralResponse.OPERATION_SUCCESS)
                                .objectResponse(IUserResponse.AUTENTIFICATION_SUCESS)
                                .objectId(usuarioDecode.getUserId())
                                .statusCode(HttpStatus.OK.value())
                                .build());
                    }
                }
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(IUserResponse.USER_FAIL_PASSWORD)
                        .objectResponse(null)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            } else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(IUserResponse.USER_FAIL)
                        .objectResponse(null)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                    .message(GeneralResponse.INTERNAL_SERVER)
                    .objectResponse(null)
                    .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> createUser(UserDTO userDTO) {
        try {
            Optional<UserEntity> existeLogin;
            existeLogin = iUserRepository.findUserForEmail(userDTO.getUserId(), userDTO.getUserEmail());
            if(!existeLogin.isPresent()){
                UserEntity userEntity = userConverter.convertUserDTOToUserEntity(userDTO);
                userEntity.setUserStatus("Habilitado");
                iUserRepository.save(userEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.CREATE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else{
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IUserResponse.USER_SUCCESS)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e){
            log.error(GeneralResponse.INTERNAL_SERVER + e);
            return new ResponseEntity<>(GenericResponseDTO.builder()
                    .message(GeneralResponse.INTERNAL_SERVER)
                    .objectResponse(null)
                    .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .build(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readUser(Integer userId) {
        try{
            Optional<UserEntity> userEntityExist = this.iUserRepository.findById(userId);
            if (userEntityExist.isPresent()){
                UserDTO userDTO = this.userConverter.convertUserEntityToUserDTO(userEntityExist.get());
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(userDTO)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else{
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IUserResponse.USER_UPDATE_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e){
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readUsers() {
        try {
            List<UserDTO> listUserDTO = new ArrayList<>();
            List<UserEntity> listUsers = this.iUserRepository.findUsers();
            if(!listUsers.isEmpty()){
                listUsers.forEach(userEntity -> {
                    UserDTO userDTO = userConverter.convertUserEntityToUserDTO(userEntity);
                    listUserDTO.add(userDTO);
                });
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(listUserDTO)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else{
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IUserResponse.USER_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        }catch (Exception e){
            log.error(GeneralResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> updateUser(UserDTO userDTO) {
        try {
            Optional<UserEntity> userEntityExist = this.iUserRepository.findById(userDTO.getUserId());
            if (userEntityExist.isPresent()){
                UserEntity userEntity = this.userConverter.convertUserDTOToUserEntity(userDTO);
                userEntity.setUserStatus("Habilitado");
                this.iUserRepository.save(userEntity);
                return new ResponseEntity<>(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(IUserResponse.USER_UPDATE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build(), HttpStatus.OK);
            }else{
                return new ResponseEntity<>(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IUserResponse.USER_UPDATE_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build(), HttpStatus.BAD_REQUEST);
            }
        }catch (Exception e){
            log.error(GeneralResponse.INTERNAL_SERVER + e);
            return new ResponseEntity<>(GenericResponseDTO.builder()
                    .message(GeneralResponse.INTERNAL_SERVER)
                    .objectResponse(null)
                    .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .build(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> deleteUser(Integer userId) {
        try {
            Optional<UserEntity> userEntityExist = this.iUserRepository.findById(userId);
            if(userEntityExist.isPresent()){
                userEntityExist.get().setUserStatus("Borrado");
                this.iUserRepository.save(userEntityExist.get());
                return new ResponseEntity<>(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(IUserResponse.USER_DELETE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build(), HttpStatus.OK);
            }else{
                return new ResponseEntity<>(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(IUserResponse.USER_DELETE_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build(), HttpStatus.BAD_REQUEST);
            }
        }catch (Exception e){
            log.error(GeneralResponse.INTERNAL_SERVER + e);
            return new ResponseEntity<>(GenericResponseDTO.builder()
                    .message(GeneralResponse.INTERNAL_SERVER)
                    .objectResponse(null)
                    .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                    .build(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}