package LaCiguenia.commons.converter.category;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.category.CategoryDTO;
import LaCiguenia.commons.domains.entity.category.CategoryEntity;
import LaCiguenia.commons.helpers.HelperMapper;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class CategoryConverter {
    public CategoryDTO convertCategoryEntityToCategoryDTO(CategoryEntity categoryEntity) {
        CategoryDTO categoryDTO = new CategoryDTO();
        try {
            categoryDTO = HelperMapper.modelMapper().map(categoryEntity, CategoryDTO.class);
        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return categoryDTO;
    }

    public CategoryEntity convertCategoryDTOToCategoryEntity(CategoryDTO categoryDTO) {
        CategoryEntity categoryEntity = new CategoryEntity();
        try {
            categoryEntity = HelperMapper.modelMapper().map(categoryDTO, CategoryEntity.class);

        } catch (Exception e) {
            log.error(GeneralResponse.DOCUMENT_FAIL + e);
        }
        return categoryEntity;
    }
}