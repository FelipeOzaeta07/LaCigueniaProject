package LaCiguenia.repository.inventory;

import LaCiguenia.commons.domains.entity.inventory.InventoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IInventoryRepository extends JpaRepository<InventoryEntity, Integer> { }