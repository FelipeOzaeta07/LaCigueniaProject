package LaCiguenia.service.invoice.implement;

public class SalesInfoService {
    private final Integer dailySales;
    private final Integer totalSales;

    public SalesInfoService(Integer dailySales, Integer totalSales) {
        this.dailySales = dailySales;
        this.totalSales = totalSales;
    }

    public Integer getDailySales() {
        return dailySales;
    }

    public Integer getTotalSales() {
        return totalSales;
    }
}
