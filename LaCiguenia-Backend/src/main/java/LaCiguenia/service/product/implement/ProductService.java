package LaCiguenia.service.product.implement;

import LaCiguenia.commons.constans.response.product.IProductResponse;
import LaCiguenia.commons.converter.product.ProductConverter;
import LaCiguenia.commons.domains.dto.product.ProductDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import LaCiguenia.repository.product.IProductRepository;
import LaCiguenia.service.product.IProductService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
@Log4j2
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository iProductRepository;
    @Autowired
    private ProductConverter productConverter;

    @Override
    public ResponseEntity<GenericResponseDTO> createProducts(ProductDTO productDTO) {
        try {
            Optional<ProductEntity> productoExist = this.iProductRepository
                    .findById(productDTO.getIdProduct());
            if (!productoExist.isPresent()){
                ProductEntity productEntity = this.productConverter.convertProductDTOToProductEntity(productDTO);
                this.iProductRepository.save(productEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(IProductResponse.CREATE_SUCCESS)
                        .objectResponse(IProductResponse.CREATE_PRODUCT_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(IProductResponse.PRODUCT_SUCCESS)
                        .objectResponse(null)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }

        }catch (Exception e) {
            log.error(IProductResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(IProductResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readProduct(ProductDTO productDTO) {
        try {
            Optional<ProductEntity> productoExist = this.iProductRepository
                    .findById(productDTO.getIdProduct());
            if (productoExist.isPresent()){
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(IProductResponse.OPERATION_SUCCESS)
                        .objectResponse(this.iProductRepository.findById(productDTO.getIdProduct()))
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(IProductResponse.PRODUCT_FAIL)
                        .objectResponse(null)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }

        }catch (Exception e) {
            log.error(IProductResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(IProductResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> readProducts() {
        try {
            List<ProductEntity> listProductsEntity =this.iProductRepository.findAll();
            if (!listProductsEntity.isEmpty()){
                List<ProductDTO> listProductDTO = new ArrayList<>();
                for (ProductEntity productEntity : listProductsEntity){
                    ProductDTO productDTO = this.productConverter.convertProductEntityToProductDTO(productEntity);
                    listProductDTO.add(productDTO);
                }
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(IProductResponse.OPERATION_SUCCESS)
                        .objectResponse(listProductDTO)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }
            else {
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(IProductResponse.OPERATION_FAIL)
                        .objectResponse(IProductResponse.PRODUCT_FAIL)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }

        }catch (Exception e) {
            log.error(IProductResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(IProductResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> updateProduct(ProductDTO productDTO) {
        try {
            Optional<ProductEntity> productoExist = this.iProductRepository
                    .findById(productDTO.getIdProduct());
            if (productoExist.isPresent()){
                ProductEntity productEntity = this.productConverter.convertProductDTOToProductEntity(productDTO);
                this.iProductRepository.save(productEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(IProductResponse.OPERATION_SUCCESS)
                        .objectResponse(IProductResponse.UPDATE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(IProductResponse.PRODUCT_FAIL)
                        .objectResponse(null)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }

        }catch (Exception e) {
            log.error(IProductResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(IProductResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Override
    public ResponseEntity<GenericResponseDTO> deleteProducts(ProductDTO productDTO) {
        try {
            Optional<ProductEntity> productoExist = this.iProductRepository.findById(productDTO.getIdProduct());
            if (productoExist.isPresent()){
                ProductEntity productEntity = this.productConverter.convertProductDTOToProductEntity(productDTO);
                this.iProductRepository.delete(productEntity);
                return ResponseEntity.ok(GenericResponseDTO.builder()
                        .message(IProductResponse.OPERATION_SUCCESS)
                        .objectResponse(IProductResponse.DELETE_SUCCESS)
                        .statusCode(HttpStatus.OK.value())
                        .build());
            }else {
                return ResponseEntity.badRequest().body(GenericResponseDTO.builder()
                        .message(IProductResponse.PRODUCT_FAIL)
                        .objectResponse(null)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
            }

        }catch (Exception e) {
            log.error(IProductResponse.INTERNAL_SERVER, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponseDTO.builder()
                            .message(IProductResponse.INTERNAL_SERVER)
                            .objectResponse(null)
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }
}