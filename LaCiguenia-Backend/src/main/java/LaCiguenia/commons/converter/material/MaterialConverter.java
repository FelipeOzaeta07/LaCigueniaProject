package LaCiguenia.commons.converter.material;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.material.MaterialDTO;
import LaCiguenia.commons.domains.entity.material.MaterialEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class MaterialConverter {
    public MaterialDTO convertMaterialEntityToMaterialDTO(MaterialEntity materialEntity) {
        MaterialDTO materialDTO = new MaterialDTO();
        try {
            materialDTO = HelperMapper.modelMapper().map(materialEntity, MaterialDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return materialDTO;
    }

    public MaterialEntity convertMaterialDTOToMaterialEntity(MaterialDTO materialDTO) {
        MaterialEntity materialEntity = new MaterialEntity();
        try {
            materialEntity = HelperMapper.modelMapper().map(materialDTO, MaterialEntity.class);

        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return materialEntity;
    }
}