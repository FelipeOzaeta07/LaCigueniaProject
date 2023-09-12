package LaCiguenia.commons.converter.opening;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.opening.OpeningDTO;
import LaCiguenia.commons.domains.entity.opening.OpeningEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class OpeningConverter {
    public OpeningDTO convertOpeningEntityToOpeningDTO(OpeningEntity openingEntity) {
        OpeningDTO openingDTO = new OpeningDTO();
        try {
            openingDTO = HelperMapper.modelMapper().map(openingEntity, OpeningDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return openingDTO;
    }

    public OpeningEntity convertOpeningDTOToOpeningEntity(OpeningDTO openingDTO) {
        OpeningEntity openingEntity = new OpeningEntity();
        try {
            openingEntity = HelperMapper.modelMapper().map(openingDTO, OpeningEntity.class);

        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return openingEntity;
    }
}