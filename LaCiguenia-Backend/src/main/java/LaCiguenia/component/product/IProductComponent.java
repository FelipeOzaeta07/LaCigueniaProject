package LaCiguenia.component.product;

import LaCiguenia.commons.domains.entity.product.ProductEntity;

import java.util.List;

public interface IProductComponent {
    List <ProductEntity> ProductsSalesFourDay(List<ProductEntity> listProduct);
}