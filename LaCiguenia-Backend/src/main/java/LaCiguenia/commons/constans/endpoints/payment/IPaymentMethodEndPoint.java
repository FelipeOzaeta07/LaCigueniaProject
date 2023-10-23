package LaCiguenia.commons.constans.endpoints.payment;

public interface IPaymentMethodEndPoint {
    String BASE_URL_PAYMENT_METHOD = "/metodo-pago";
    String CREATE_PAYMENT_METHOD = "/crear-metodo-pago";
    String READ_PAYMENT_METHODS = "/leer-metodos-pago";
    String DELETE_PAYMENT_METHOD = "/eliminar-metodo-pago/{PaymentMethodId}";
}