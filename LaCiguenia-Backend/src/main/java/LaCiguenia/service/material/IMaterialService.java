package LaCiguenia.service.material;

import LaCiguenia.commons.domains.dto.material.MaterialDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;

public interface IMaterialService {
    ResponseEntity<GenericResponseDTO> createMaterial(MaterialDTO materialDTO);
    ResponseEntity<GenericResponseDTO> readMaterial(MaterialDTO materialDTO);
    ResponseEntity<GenericResponseDTO> readMaterials();
    ResponseEntity<GenericResponseDTO> updateMaterial(MaterialDTO materialDTO);
    ResponseEntity<GenericResponseDTO> deleteMaterial(Integer materialId);
}