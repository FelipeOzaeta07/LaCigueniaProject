package LaCiguenia.commons.constans.endpoints.expense;

public interface IExpenseEndPoint {
    String BASE_URL_EXPENSE = "/gasto";
    String CREATE_EXPENSE = "/crear-gasto";
    String READ_EXPENSE = "/leer-gastos";
    String READ_TOTAL_EXPENSE = "/leer-total-gastos/{storeId}";
    String READ_TOTAL_EXPENSE_CASH = "/leer-total-gastos-efectivo";
    String READ_TOTAL_EXPENSE_MONTH = "/leer-total-gastos-mes/{storeId}";
    String DELETE_EXPENSE = "/eliminar-gasto/{expenseId}";
}