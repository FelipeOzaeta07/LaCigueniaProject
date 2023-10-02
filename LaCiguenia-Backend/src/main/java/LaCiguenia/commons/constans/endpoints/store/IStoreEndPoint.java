package LaCiguenia.commons.constans.endpoints.store;

public interface IStoreEndPoint {
    String BASE_URL_STORE = "/tienda";
    String CREATE_STORE = "/crear-tienda";
    String READ_STORE = "/leer-tienda";
    String READ_STORES = "/leer-tiendas";
    String UPDATE_STORE = "/actualizar-tienda";
    String DELETE_STORE = "/eliminar-tienda/{storeId}";
}
