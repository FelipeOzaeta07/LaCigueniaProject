package LaCiguenia.commons.converter.detail;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.detail.DetailDTO;
import LaCiguenia.commons.domains.entity.detail.DetailEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class DetailConverter {
    public DetailDTO convertDetailEntityToDetailDTO(DetailEntity detailEntity) {
        DetailDTO detailDTO = new DetailDTO();
        try {
            detailDTO = HelperMapper.modelMapper().map(detailEntity, DetailDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return detailDTO;
    }

    public DetailEntity convertDetailDTOToDetailEntity(DetailDTO detailDTO) {
        DetailEntity detailEntity = new DetailEntity();
        try {
            detailEntity = HelperMapper.modelMapper().map(detailDTO, DetailEntity.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return detailEntity;
    }
}