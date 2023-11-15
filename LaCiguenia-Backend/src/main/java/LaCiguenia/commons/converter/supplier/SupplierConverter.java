package LaCiguenia.commons.converter.supplier;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.supplier.SupplierDTO;
import LaCiguenia.commons.domains.entity.supplier.SupplierEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class SupplierConverter {
    public SupplierDTO convertSupplierEntityToSupplierDTO(SupplierEntity supplierEntity){
        SupplierDTO supplierDTO = new SupplierDTO();
        try{
            supplierDTO = HelperMapper.modelMapper().map(supplierEntity, SupplierDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return supplierDTO;
    }

    public SupplierEntity convertSupplierDTOToSupplierEntity(SupplierDTO supplierDTO){
        SupplierEntity supplierEntity = new SupplierEntity();
        try{
            supplierEntity = HelperMapper.modelMapper().map(supplierDTO, SupplierEntity.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return supplierEntity;
    }
}