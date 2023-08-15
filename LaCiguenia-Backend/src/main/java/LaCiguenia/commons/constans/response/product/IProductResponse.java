package LaCiguenia.commons.constans.response.product;

public interface IProductResponse {
    String OPERATION_SUCCESS = "Operación exitosa";
    String OPERATION_FAIL = "Operación fallida";
    String NOT_FOUND = "Operación fallida. no requerida";
    String CREATE_SUCCESS = "OK se creo correctamente";
    String CREATE_FAIL = "No se creo correctamente";
    String UPDATE_SUCCESS_REQUEST = "Bad Request. No actualizo correctamente";
    String UPDATE_SUCCESS = "Se actualizo correctamente";
    String UPDATE_FAIL = "No se actualizo correctamente";
    String DELETE_SUCCESS = "Se elimino correctamente";
    String DELETE_FAIL = "No se elimino correctamente";
    String PRODUCT_SUCCESS = "Producto ya existe";
    String PRODUCT_FAIL = "Producto no existe";
    String CREATE_PRODUCT_SUCCESS = "producto creado correctamente";
    String DOCUMENT_FAIL = "No se pudo convertir el documento: ";
    String INTERNAL_SERVER = "Internal Server error. Error inesperado del sistema";
}
