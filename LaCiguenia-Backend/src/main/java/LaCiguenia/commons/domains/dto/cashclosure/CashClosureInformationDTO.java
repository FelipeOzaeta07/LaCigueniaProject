package LaCiguenia.commons.domains.dto.cashclosure;

import lombok.*;
import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class CashClosureInformationDTO implements Serializable {
    private String cashClosureInformationStore;
    private Integer cashClosureInformationStoreId;
    private Double cashClosureInformationOpeningBox;
    private Double cashClosureInformationTotalCash;
}