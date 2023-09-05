package LaCiguenia.component.product.implement;

import LaCiguenia.commons.constans.response.GeneralResponse;
import LaCiguenia.commons.domains.entity.product.ProductEntity;
import LaCiguenia.component.product.IProductComponent;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Log4j2
public class ProductComponent implements IProductComponent {
    @Override
    public List<ProductEntity> ProductsSalesFourDay(List<ProductEntity> listProduct) {
        return null;
    }
}