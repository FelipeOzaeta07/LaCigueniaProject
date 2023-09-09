package LaCiguenia.commons.domains.dto.material;

import lombok.*;
import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class MaterialDTO implements Serializable {
    private Integer materialId;
    private String materialName;
    private String materialDescription;
}