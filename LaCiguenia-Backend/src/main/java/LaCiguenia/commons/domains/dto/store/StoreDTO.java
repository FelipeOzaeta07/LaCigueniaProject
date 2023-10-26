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
    private String storeName;
    private String storeNumberNit;
    private String storeType;
    private String storePhoneNumber;
    private String storeEmail;
    private String storeCodeCIIU;
    private String storeCity;
    private String storeAddress;
    private String storeStatus;
}
