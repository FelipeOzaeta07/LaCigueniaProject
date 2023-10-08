package LaCiguenia.commons.constans.endpoints.product;

public interface IProductEndPoint {
    String BASE_URL_PRODUCT = "/producto";
    String CREATE_PRODUCT = "/crear-producto";
    String READ_PRODUCT_ID = "/leer-producto-id/{productId}";
    String READ_PRODUCT = "/leer-producto/{productName}";
    String READ_PRODUCTS = "/leer-productos";
    String READ_PRODUCTS_RECENTLY_CREATE = "/leer-productos-creados";
    String UPDATE_PRODUCT = "/actualizar-producto";
    String DELETE_PRODUCT = "/eliminar-producto/{productId}";
    String READ_PRODUCT_NAME = "/leer-producto-por-nombre/{productName}";
    String READ_PRODUCT_CATEGORY = "/leer-productos-por-categoria{categoryId}";
}