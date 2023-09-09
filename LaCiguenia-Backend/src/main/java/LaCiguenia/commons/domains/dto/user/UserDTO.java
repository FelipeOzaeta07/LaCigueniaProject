package LaCiguenia.commons.domains.dto.user;

import java.io.Serializable;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class UserDTO implements Serializable {
    private Integer userId;
    private String userName;
    private String userEmail;
    private String userPassword;
}