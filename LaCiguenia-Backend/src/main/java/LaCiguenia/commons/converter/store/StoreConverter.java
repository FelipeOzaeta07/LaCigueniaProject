package LaCiguenia.commons.converter.store;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.store.StoreDTO;
import LaCiguenia.commons.domains.entity.store.StoreEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class StoreConverter {
    public StoreDTO convertStoreEntityToStoreDTO(StoreEntity storeEntity){
        StoreDTO storeDTO = new StoreDTO();
        try{
            storeDTO = HelperMapper.modelMapper().map(storeEntity, StoreDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return storeDTO;
    }

    public StoreEntity convertStoreDTOToStoreEntity(StoreDTO storeDTO){
        StoreEntity storeEntity = new StoreEntity();
        try{
            storeEntity = HelperMapper.modelMapper().map(storeDTO, StoreEntity.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return storeEntity;
    }

}