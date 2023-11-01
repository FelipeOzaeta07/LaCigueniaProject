package LaCiguenia.commons.constans.endpoints.cashclosure;

public interface ICashClosureEndPoint {
    String BASE_URL_CASH_CLOSURE = "/cerrar-caja";
    String CREATE_CASH_CLOSURE = "/crear-cerrar-caja";
    String READ_CASH_CLOSURE = "/leer-cerrar-caja/{categoryId}";
    String READ_CASH_CLOSURES = "/leer-cerrar-cajas";
    String READ_LAST_CASH_CLOSURES = "/leer-ultimo-cerrar-caja";
    String READ_INFORMATION_CASH_CLOSURE ="/informacion-para-cierre-caja";
    String READ_DETAIL_INFORMATION_CASH_CLOSURE ="/detalle-informacion-para-cierre-caja";
}