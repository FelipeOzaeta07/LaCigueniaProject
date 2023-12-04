package LaCiguenia.commons.domains.dto.notification;

import lombok.*;

import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class NotificationDTO implements Serializable {
    private String notificationMessage;
}