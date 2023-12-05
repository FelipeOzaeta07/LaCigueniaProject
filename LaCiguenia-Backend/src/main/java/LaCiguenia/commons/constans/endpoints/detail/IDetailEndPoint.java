package LaCiguenia.commons.constans.endpoints.detail;

public interface IDetailEndPoint {
    String BASE_URL_DETAIL = "/detalle";
    String CREATE_DETAIL = "/crear-detalle";
    String READ_DETAIL = "/leer-detalle{invoiceId}";
    String READ_DETAILS = "/leer-detalles";
    String READ_DETAILS_MORE_SOLD = "/leer-detalles_mas-vendidos/{storeId}";
    String UPDATE_DETAIL = "/actualizar-detalle";
    String DELETE_DETAIL = "/eliminar-detalle";
}