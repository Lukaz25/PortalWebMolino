package com.PortalWebMolino.BackendMolino.Repository;

import com.PortalWebMolino.BackendMolino.Entity.rolusuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface rolusuarioRepository extends JpaRepository<rolusuarioEntity, Integer> {
@Query("SELECT u FROM rolusuarioEntity u WHERE u.idrol= :id")
    rolusuarioEntity findByID(@Param("id")Integer id);
}
