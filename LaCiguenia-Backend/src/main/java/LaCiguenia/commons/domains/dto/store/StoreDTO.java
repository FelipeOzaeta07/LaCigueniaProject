package LaCiguenia.commons.domains.dto.store;

import lombok.*;
import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class StoreDTO implements Serializable {
    private Integer storeId;
    private Integer storeNit;
    private String storeName;
    private String storeLocation;
    private String storeNumber;
    private String storeStatus;
}
