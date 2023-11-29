package LaCiguenia.service.category.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.category.ICategoryResponse;
import LaCiguenia.commons.converter.category.CategoryConverter;
import LaCiguenia.commons.domains.dto.category.CategoryDTO;
import LaCiguenia.commons.domains.entity.category.CategoryEntity;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.repository.category.ICategoryRepository;
import LaCiguenia.service.category.ICategoryService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class CategoryService implements ICategoryService {

    @Autowired
    private ICategoryRepository iCategoryRepository;
    @Autowired
    private CategoryConverter categoryConverter;

    @Override
    public ResponseEntity<GenericResponseDTO> createCategory(CategoryDTO categoryDTO) {
        try {
            Optional<CategoryEntity> categoryExist = this.iCategoryRepository.findById(categoryDTO.getCategoryId());
            if (!categoryExist.isPresent()) {
                CategoryEntity categoryEntity = categoryConverter.convertCategoryDTOToCategoryEntity(categoryDTO);
                categoryEntity.setCategoryStatus("Activa");
                this.iCategoryRepository.save(categoryEntity);
                return new ResponseEntity<>(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.CREATE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build(), HttpStatus.OK);
            } else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(ICategoryResponse.CATEGORY_SUCCESS)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER_ERROR, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readProductsForCategory(Integer categoryId) {
        try {
            Optional<CategoryEntity> categoryExist = this.iCategoryRepository.findById(categoryId);
            System.out.println(categoryExist.get());
            if (!categoryExist.isEmpty()){
                return new ResponseEntity<>(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(categoryExist)
                        .statusCode(HttpStatus.OK.value())
                        .build(), HttpStatus.OK);
            } else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(ICategoryResponse.CATEGORY_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER_ERROR, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readCategories() {
        try {
            List<CategoryEntity> listCategoryExist = this.iCategoryRepository.listCategoryActive();
            if (!listCategoryExist.isEmpty()){
                return  new ResponseEntity<>(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(listCategoryExist)
                        .statusCode(HttpStatus.OK.value())
                        .build(), HttpStatus.OK);
            }else {
                return new ResponseEntity<>(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(ICategoryResponse.CATEGORIES_FAIL)
                        .statusCode(HttpStatus.OK.value())
                        .build(), HttpStatus.OK);
            }
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER_ERROR, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> updateCategory(CategoryDTO categoryDTO) {
        try {
            Optional<CategoryEntity> categoryExist = this.iCategoryRepository.findById(categoryDTO.getCategoryId());
            if (categoryExist.isPresent()) {
                CategoryEntity categoryEntity = categoryConverter.convertCategoryDTOToCategoryEntity(categoryDTO);
                this.iCategoryRepository.save(categoryEntity);
                return new ResponseEntity<>(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.UPDATE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build(), HttpStatus.OK);
            } else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_FAIL)
                        .objectResponse(ICategoryResponse.CATEGORY_FAIL)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER_ERROR, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> deleteCategory(Integer categoryId) {
        try {
            Optional<CategoryEntity> categoryExist = this.iCategoryRepository.findById(categoryId);
            if (categoryExist.isPresent()) {
                this.iCategoryRepository.deleteById(categoryId);
                return new ResponseEntity<>(GenericResponseDTO.builder()
                        .message(GeneralResponse.OPERATION_SUCCESS)
                        .objectResponse(GeneralResponse.CREATE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build(), HttpStatus.OK);
            } else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(GeneralResponse.DELETE_FAIL)
                        .objectResponse(ICategoryResponse.CATEGORY_SUCCESS)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }
        } catch (Exception e) {
            log.error(GeneralResponse.INTERNAL_SERVER_ERROR, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(GeneralResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }
}