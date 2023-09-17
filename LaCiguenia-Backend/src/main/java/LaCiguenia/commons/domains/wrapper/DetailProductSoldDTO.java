package LaCiguenia.commons.domains.wrapper;

public interface DetailProductSoldDTO {
    Integer getProductId();
    String getProductName();
    Double getProductPrice();
    String getProductDescription();
    Integer getCategoryId();
    Integer getTotalDetailAmount();
    Integer getInventoryAmount();
    String getCategoryName();
}
