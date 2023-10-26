package LaCiguenia.service.opening.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.opening.IOpeningResponse;
import LaCiguenia.commons.converter.opening.OpeningConverter;
import LaCiguenia.commons.converter.store.StoreConverter;
import LaCiguenia.commons.domains.dto.opening.OpeningDTO;
import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.repository.opening.IOpeningRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class OpeningServiceTest {

    @Mock
    private IOpeningRepository iOpeningRepository;
    @Mock
    private OpeningConverter openingConverter;
    @Mock
    private StoreConverter storeConverter;
    private OpeningService openingService;

    @BeforeEach
    void setUp() throws Exception{
        MockitoAnnotations.openMocks(this).close();
        openingService = new OpeningService(iOpeningRepository, openingConverter, storeConverter);
    }

    @Test
    void testCreateOpeningSuccess() {
        OpeningDTO openingDTO = new OpeningDTO();
        openingDTO.setOpeningId(1);

        when(iOpeningRepository.findById(openingDTO.getOpeningId())).thenReturn(Optional.empty());

        ResponseEntity<GenericResponseDTO> response = openingService.createOpening(openingDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(GeneralResponse.CREATE_SUCCESS, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iOpeningRepository, times(1)).findById(openingDTO.getOpeningId());
        verify(iOpeningRepository, times(1)).save(any(OpeningEntity.class));
    }

    @Test
    void testCreateOpeningFailure() {
        OpeningDTO openingDTO = new OpeningDTO();
        openingDTO.setOpeningId(1);

        when(iOpeningRepository.findById(openingDTO.getOpeningId())).thenReturn(Optional.of(new OpeningEntity()));

        ResponseEntity<GenericResponseDTO> response = openingService.createOpening(openingDTO);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IOpeningResponse.OPENING_SUCCESS, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iOpeningRepository, times(1)).findById(openingDTO.getOpeningId());
    }

    @Test
    void testReadLastOpeningSuccess() {
        OpeningEntity openingEntity = new OpeningEntity();
        OpeningDTO openingDTO = new OpeningDTO();

        when(iOpeningRepository.findByLastOpening()).thenReturn(Optional.of(openingEntity));
        when(openingConverter.convertOpeningEntityToOpeningDTO(openingEntity)).thenReturn(openingDTO);

        ResponseEntity<GenericResponseDTO> response = openingService.readLastOpening();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(openingDTO, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iOpeningRepository, times(1)).findByLastOpening();
        verify(openingConverter, times(1)).convertOpeningEntityToOpeningDTO(openingEntity);
    }

    @Test
    void testReadLastOpeningFailure() {
        when(iOpeningRepository.findByLastOpening()).thenReturn(Optional.empty());

        ResponseEntity<GenericResponseDTO> response = openingService.readLastOpening();

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IOpeningResponse.OPENING_SUCCESS, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iOpeningRepository, times(1)).findByLastOpening();
        verifyNoInteractions(openingConverter);
    }
}