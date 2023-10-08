package LaCiguenia.service.user.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.user.IUserResponse;
import LaCiguenia.commons.converter.user.UserConverter;
import LaCiguenia.commons.domains.dto.user.UserDTO;
import LaCiguenia.commons.domains.entity.user.UserEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.repository.user.IUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private IUserRepository iUserRepository;
    @Mock
    private UserConverter userConverter;
    private UserService userService;

    @BeforeEach
    void setUp() throws Exception{
        MockitoAnnotations.openMocks(this).close();
        userService = new UserService(iUserRepository, userConverter);
    }

    @Test
    void userService() {
        List<UserEntity> listUserEntity = new ArrayList<>();
        UserEntity userEntity = new UserEntity(1, "United National Security Code",
                "unsc@gmail.com", "Esteban123");
        listUserEntity.add(userEntity);

        when(iUserRepository.findAll()).thenReturn(listUserEntity);

        UserDTO userDTO = new UserDTO(1, "United National Security Code",
                "unsc@gmail.com", "Esteban123");

        when(userConverter.convertUserEntityToUserDTO(any(UserEntity.class))).thenReturn(userDTO);

        ResponseEntity<GenericResponseDTO> response = userService.userService(userDTO);

        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(IUserResponse.AUTENTIFICATION_SUCESS, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getStatusCodeValue());
    }

    @Test
    void testUserCreateSuccess() {
        UserDTO userDTO = new UserDTO();

        when(iUserRepository.findById(userDTO.getUserId())).thenReturn(Optional.empty());
        when(userConverter.convertLoginDTOToLoginEntity(userDTO)).thenReturn(new UserEntity());

        ResponseEntity<GenericResponseDTO> response = userService.userCreate(userDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(GeneralResponse.CREATE_SUCCESS, response.getBody().getObjectResponse());

        //Es Importante cuando retorna vacio - o los datos se corrieron correctamente - sin un OutPut
        verify(iUserRepository, times(1)).findById(userDTO.getUserId());
        verify(userConverter, times(1)).convertLoginDTOToLoginEntity(userDTO);
        verify(iUserRepository, times(1)).save(any(UserEntity.class));
    }

    @Test
    void testUserCreateFailure() {
        UserDTO userDTO = new UserDTO();

        when(iUserRepository.findById(userDTO.getUserId())).thenReturn(Optional.of(new UserEntity()));

        ResponseEntity<GenericResponseDTO> response = userService.userCreate(userDTO);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IUserResponse.USER_SUCCESS, response.getBody().getObjectResponse());

        verify(iUserRepository, times(1)).findById(userDTO.getUserId());
        verify(userConverter, never()).convertLoginDTOToLoginEntity(userDTO);
        verify(iUserRepository, never()).save(any(UserEntity.class));
    }
}