package LaCiguenia.commons.constans.endpoints.category;

public interface ICategoryEndPoint {
    String BASE_URL_CATEGORY = "/categoria";
    String CREATE_CATEGORY = "/crear-categoria";
    String READ_CATEGORY = "/leer-categoria/{categoryId}";
    String READ_CATEGORIES = "/leer-categorias";
    String UPDATE_CATEGORY = "/actualizar-categoria";
    String DELETE_CATEGORY = "/eliminar-categoria";
}