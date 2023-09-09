package LaCiguenia.commons.domains.dto.category;

import lombok.*;
import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class CategoryDTO implements Serializable {
    private Integer categoryId;
    private String CategoryName;
    private String categoryDescription;
}