package LaCiguenia.commons.converter.inventory;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.inventory.InventoryDTO;
import LaCiguenia.commons.domains.entity.inventory.InventoryEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class InventoryConverter {
    public InventoryDTO convertInventoryEntityToInventoryDTO(InventoryEntity inventoryEntity) {
        InventoryDTO inventoryDTO = new InventoryDTO();
        try {
            inventoryDTO = HelperMapper.modelMapper().map(inventoryEntity, InventoryDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return inventoryDTO;
    }

    public InventoryEntity convertInventoryDTOToInventoryEntity(InventoryDTO inventoryDTO) {
        InventoryEntity inventoryEntity = new InventoryEntity();
        try {
            inventoryEntity = HelperMapper.modelMapper().map(inventoryDTO, InventoryEntity.class);

        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return inventoryEntity;
    }
}
