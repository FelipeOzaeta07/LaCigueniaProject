package LaCiguenia.webApi.product.implementService;

import LaCiguenia.commons.constans.endpoints.product.IProductEndPoint;
import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.dto.product.ProductDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import LaCiguenia.service.product.IProductComplementService;
import LaCiguenia.webApi.product.IProductServiceApi;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(IProductEndPoint.BASE_URL_PRODUCT_FOUR)
@Tag(name = "Sistema de lectura de productos", description = "Leer y retornar los productos vendidos")
@Log4j2
public class ProductServiceApi implements IProductServiceApi {
    private final IProductComplementService iProductComplementService;
    public ProductServiceApi(IProductComplementService iProductComplementService) {this.iProductComplementService = iProductComplementService;}
    @Override
    @Operation(summary = "Leer los 4 productos mas vendidos del dia")
    @ApiResponses(value = {
            @ApiResponse(responseCode  = "200", description = GeneralResponse.CREATE_SUCCESS,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = GenericResponseDTO.class))}),
            @ApiResponse(responseCode  = "400", description = GeneralResponse.CREATE_FAIL,
                    content = {@Content(mediaType = "application/json",
                            schema = @Schema(implementation = String.class))}),
            @ApiResponse(responseCode  = "404", description = GeneralResponse.NOT_FOUND,
                    content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode  = "500", description = GeneralResponse.INTERNAL_SERVER,
                    content = {@Content(mediaType = "application/json")})})
    @GetMapping(IProductEndPoint.READ_FOUR_PRODUCTS)
    public ResponseEntity<GenericResponseDTO> readFourProducts() {
        return this.iProductComplementService.readProductsFour();
    }
}
