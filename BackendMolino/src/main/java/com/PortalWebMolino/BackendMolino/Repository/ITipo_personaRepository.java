package com.PortalWebMolino.BackendMolino.Repository;


import com.PortalWebMolino.BackendMolino.Entity.Tipo_persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ITipo_personaRepository extends JpaRepository<Tipo_persona, Long> {
    @Query("SELECT tp FROM Tipo_persona tp WHERE tp.idtipo_persona= :id")
    Tipo_persona findByID(@Param("id") Long id);
}
