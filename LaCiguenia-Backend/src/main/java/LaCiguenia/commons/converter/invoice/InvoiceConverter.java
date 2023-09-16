package LaCiguenia.commons.converter.invoice;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.converter.customer.CustomerConverter;
import LaCiguenia.commons.domains.dto.invoice.InvoiceDTO;
import LaCiguenia.commons.domains.entity.invoice.InvoiceEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import LaCiguenia.service.customer.implement.CustomerService;
import lombok.CustomLog;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class InvoiceConverter {
    @Autowired
    private CustomerConverter customerConverter;

    public InvoiceDTO convertInvoiceEntityToInvoiceDTO(InvoiceEntity invoiceEntity) {
        InvoiceDTO invoiceDTO = new InvoiceDTO();
        try {
            invoiceDTO = HelperMapper.modelMapper().map(invoiceEntity, InvoiceDTO.class);
            invoiceDTO.setCustomerEntity(customerConverter.convertCustomerEntityToCustomerDTO(invoiceEntity.getCustomerEntity()));
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return invoiceDTO;
    }

    public InvoiceEntity convertInvoiceDTOToInvoiceEntity(InvoiceDTO invoiceDTO) {
        InvoiceEntity invoiceEntity = new InvoiceEntity();
        try {
            invoiceEntity = HelperMapper.modelMapper().map(invoiceDTO, InvoiceEntity.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return invoiceEntity;
    }
}