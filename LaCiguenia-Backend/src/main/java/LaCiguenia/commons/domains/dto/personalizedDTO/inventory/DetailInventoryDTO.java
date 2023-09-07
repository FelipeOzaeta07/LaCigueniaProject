package LaCiguenia.commons.domains.dto.personalizedDTO.inventory;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;

import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class DetailInventoryDTO implements Serializable {
    @Column(name = "product_name")
    private String productName;
    @Column(name = "inventory_amount")
    private Integer productAmount;
    @Column(name = "product_price")
    private Integer productPrice;
    @Column(name = "product_code")
    private String productCode;
}
