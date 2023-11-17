package com.PortalWebMolino.BackendMolino.Repository;

import com.PortalWebMolino.BackendMolino.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    @Query("SELECT p FROM Persona p WHERE p.idpersona= :id")
    Persona findByID(@Param("id") Long id);
}
