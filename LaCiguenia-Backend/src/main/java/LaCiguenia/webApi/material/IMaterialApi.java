package LaCiguenia.webApi.material;

import LaCiguenia.commons.domains.dto.material.MaterialDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IMaterialApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createMaterial(@RequestBody MaterialDTO materialDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readMaterial(@RequestBody MaterialDTO materialDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readMaterials();
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateMaterial(@RequestBody MaterialDTO materialDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteMaterial(@PathVariable Integer materialId);
}