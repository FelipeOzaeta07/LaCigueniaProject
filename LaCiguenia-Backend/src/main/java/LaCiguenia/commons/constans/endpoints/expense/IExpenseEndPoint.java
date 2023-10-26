package LaCiguenia.commons.constans.endpoints.expense;

public interface IExpenseEndPoint {
    String BASE_URL_EXPENSE = "/gasto";
    String CREATE_EXPENSE = "/crear-gasto";
    String READ_EXPENSE = "/leer-gastos";
    String DELETE_EXPENSE = "/eliminar-gasto/{expenseId}";
}