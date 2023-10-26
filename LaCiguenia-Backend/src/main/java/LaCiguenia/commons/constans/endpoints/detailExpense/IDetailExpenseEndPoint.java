package LaCiguenia.commons.constans.endpoints.detailExpense;

public interface IDetailExpenseEndPoint {
    String BASE_URL_DETAIL_EXPENSE = "/detalle-gasto";
    String CREATE_DETAIL_EXPENSE = "/crear-detalle-gasto";
    String READ_DETAILS_EXPENSE = "/leer-detalles-gastos";
    String READ_DETAIL_EXPENSE_FOR_PAYMENT = "/leer-detalle-gasto-metodo-pago";
    String DELETE_DETAIL_EXPENSE = "/eliminar-detalle-gasto/{detailExpense}";
}
