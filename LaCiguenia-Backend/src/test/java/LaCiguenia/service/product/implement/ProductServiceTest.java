package LaCiguenia.service.product.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.constans.response.product.IProductResponse;
import LaCiguenia.commons.converter.product.ProductConverter;
import LaCiguenia.commons.domains.dto.product.ProductDTO;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.repository.product.IProductRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    private IProductRepository iProductRepository;
    @Mock
    private ProductConverter productConverter;
    private ProductService productService;

    @BeforeEach
    void setUp() throws Exception{
        MockitoAnnotations.openMocks(this).close();
        productService = new ProductService(iProductRepository, productConverter);
    }

    @Test
    void testCreateProductSuccess() {
        ProductDTO productDTO = new ProductDTO();

        when(iProductRepository.findById(productDTO.getProductId())).thenReturn(Optional.empty());
        when(productConverter.convertProductDTOToProductEntity(productDTO)).thenReturn(new ProductEntity());
        when(iProductRepository.lastProductId()).thenReturn(1);

        ResponseEntity<GenericResponseDTO> response = productService.createProducts(productDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(GeneralResponse.CREATE_SUCCESS, response.getBody().getObjectResponse());
        assertEquals(1, response.getBody().getObjectId());

        verify(iProductRepository, times(1)).findById(productDTO.getProductId());
        verify(productConverter, times(1)).convertProductDTOToProductEntity(productDTO);
        verify(iProductRepository, times(1)).save(any(ProductEntity.class));
        verify(iProductRepository, times(1)).lastProductId();
    }

    @Test
    void testCreateProductFailure() {
        ProductDTO productDTO = new ProductDTO();

        when(iProductRepository.findById(productDTO.getProductId())).thenReturn(Optional.of(new ProductEntity()));

        ResponseEntity<GenericResponseDTO> response = productService.createProducts(productDTO);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IProductResponse.PRODUCT_SUCCESS, response.getBody().getObjectResponse());

        verify(iProductRepository, times(1)).findById(productDTO.getProductId());
        verify(productConverter, never()).convertProductDTOToProductEntity(productDTO);
        verify(iProductRepository, never()).save(any(ProductEntity.class));
        verify(iProductRepository, never()).lastProductId();
    }

    @Test
    void testReadProductIdSuccess() {
        int productId = 1;

        when(iProductRepository.findById(productId)).thenReturn(Optional.of(new ProductEntity()));

        ResponseEntity<GenericResponseDTO> response = productService.readProductId(productId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).findById(productId);
    }

    @Test
    void testReadProductIdFailure() {
        int productId = 1;

        when(iProductRepository.findById(productId)).thenReturn(Optional.empty());

        ResponseEntity<GenericResponseDTO> response = productService.readProductId(productId);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(IProductResponse.PRODUCT_FAIL, response.getBody().getMessage());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).findById(productId);
    }

    @Test
    void testReadProductSuccess() {
        String productName = "ProductA";

        when(iProductRepository.findByProductName(productName)).thenReturn(Optional.of(new ProductEntity()));

        ResponseEntity<GenericResponseDTO> response = productService.readProduct(productName);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).findByProductName(productName);
    }

    @Test
    void testReadProductFailure() {
        String productName = "ProductB";

        when(iProductRepository.findByProductName(productName)).thenReturn(Optional.empty());

        ResponseEntity<GenericResponseDTO> response = productService.readProduct(productName);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(IProductResponse.PRODUCT_FAIL, response.getBody().getMessage());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).findByProductName(productName);
    }

    @Test
    void testReadProductsSuccess() {
        List<ProductEntity> productList = new ArrayList<>();
        productList.add(new ProductEntity());
        when(iProductRepository.findProductsEnabled()).thenReturn(productList);

        ResponseEntity<GenericResponseDTO> response = productService.readProducts();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());
        assertEquals(productList, response.getBody().getObjectResponse());

        verify(iProductRepository, times(1)).findProductsEnabled();
    }

    @Test
    void testReadProductsFailure() {
        when(iProductRepository.findProductsEnabled()).thenReturn(new ArrayList<>());

        ResponseEntity<GenericResponseDTO> response = productService.readProducts();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IProductResponse.PRODUCT_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).findProductsEnabled();
    }

    @Test
    void testReadProductsRecentlyCreateSuccess() {
        List<ProductEntity> productList = new ArrayList<>();
        productList.add(new ProductEntity());
        when(iProductRepository.findProductRecentlyCreate()).thenReturn(productList);

        ResponseEntity<GenericResponseDTO> response = productService.readProductsRecentlyCreate();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());
        assertEquals(productList, response.getBody().getObjectResponse());

        verify(iProductRepository, times(1)).findProductRecentlyCreate();
    }

    @Test
    void testReadProductsRecentlyCreateFailure() {
        when(iProductRepository.findProductRecentlyCreate()).thenReturn(new ArrayList<>());

        ResponseEntity<GenericResponseDTO> response = productService.readProductsRecentlyCreate();

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IProductResponse.PRODUCT_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).findProductRecentlyCreate();
    }

    @Test
    void testUpdateProductSuccess() {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setProductId(1);
        Optional<ProductEntity> existingProduct = Optional.of(new ProductEntity());

        when(iProductRepository.findById(productDTO.getProductId())).thenReturn(existingProduct);

        ResponseEntity<GenericResponseDTO> response = productService.updateProduct(productDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(GeneralResponse.UPDATE_SUCCESS, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).findById(productDTO.getProductId());
        verify(iProductRepository, times(1)).save(any(ProductEntity.class));
    }

    @Test
    void testUpdateProductFailure() {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setProductId(1);
        Optional<ProductEntity> nonExistingProduct = Optional.empty();

        when(iProductRepository.findById(productDTO.getProductId())).thenReturn(nonExistingProduct);

        ResponseEntity<GenericResponseDTO> response = productService.updateProduct(productDTO);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IProductResponse.PRODUCT_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).findById(productDTO.getProductId());
        verify(iProductRepository, never()).save(any(ProductEntity.class));
    }

    @Test
    void testDeleteProductSuccess() {
        Integer productId = 1;
        Optional<ProductEntity> existingProduct = Optional.of(new ProductEntity());

        when(iProductRepository.findById(productId)).thenReturn(existingProduct);

        ResponseEntity<GenericResponseDTO> response = productService.deleteProducts(productId);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(GeneralResponse.DELETE_SUCCESS, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).findById(productId);
        verify(iProductRepository, times(1)).save(any(ProductEntity.class));
    }

    @Test
    void testDeleteProductFailure() {
        Integer productId = 1;
        Optional<ProductEntity> nonExistingProduct = Optional.empty();

        when(iProductRepository.findById(productId)).thenReturn(nonExistingProduct);

        ResponseEntity<GenericResponseDTO> response = productService.deleteProducts(productId);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IProductResponse.PRODUCT_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.BAD_REQUEST.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).findById(productId);
        verify(iProductRepository, never()).save(any(ProductEntity.class));
    }

    @Test
    void testReadProductForNameSuccess() {
        String productName = "ProductName";
        List<ProductEntity> productList = Collections.singletonList(new ProductEntity());

        when(iProductRepository.readProductForName(productName)).thenReturn(productList);

        ResponseEntity<GenericResponseDTO> response = productService.readProductForName(productName);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_SUCCESS, response.getBody().getMessage());
        assertEquals(productList, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).readProductForName(productName);
    }

    @Test
    void testReadProductForNameFailure() {
        String productName = "ProductName";
        List<ProductEntity> emptyProductList = Collections.emptyList();

        when(iProductRepository.readProductForName(productName)).thenReturn(emptyProductList);

        ResponseEntity<GenericResponseDTO> response = productService.readProductForName(productName);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(GeneralResponse.OPERATION_FAIL, response.getBody().getMessage());
        assertEquals(IProductResponse.PRODUCT_FAIL, response.getBody().getObjectResponse());
        assertEquals(HttpStatus.OK.value(), response.getBody().getStatusCode());

        verify(iProductRepository, times(1)).readProductForName(productName);
    }
}