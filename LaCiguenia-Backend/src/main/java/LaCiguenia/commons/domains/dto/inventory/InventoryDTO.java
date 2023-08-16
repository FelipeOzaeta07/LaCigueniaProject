package LaCiguenia.commons.domains.dto.inventory;

import lombok.*;

import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class InventoryDTO implements Serializable {
    private Integer inventoryId;

}
