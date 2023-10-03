package LaCiguenia.commons.constans.endpoints.customer;

public interface ICustomerEndPoint {
    String BASE_URL_CUSTOMER = "/cliente";
    String CREATE_CUSTOMER = "/crear-cliente";
    String READ_CUSTOMER = "/leer-cliente{customerId}";
    String READ_CUSTOMERS = "/leer-clientes";
    String UPDATE_CUSTOMER = "/actualizar-cliente";
    String DELETE_CUSTOMER = "/eliminar-cliente";
}