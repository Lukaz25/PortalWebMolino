package com.PortalWebMolino.BackendMolino.Repository;

import com.PortalWebMolino.BackendMolino.Entity.Rolusuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IRolusuarioRepository extends JpaRepository<Rolusuario, Long> {
    @Query("SELECT ru FROM Rolusuario ru WHERE ru.idrol= :id")
    Rolusuario findByID(@Param("id") Long id);
}
