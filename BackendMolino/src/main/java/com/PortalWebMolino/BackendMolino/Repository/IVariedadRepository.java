package com.PortalWebMolino.BackendMolino.Repository;

import com.PortalWebMolino.BackendMolino.Entity.Variedad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IVariedadRepository extends JpaRepository<Variedad,Long> {
    @Query("SELECT v FROM Variedad v WHERE v.idvariedad= :id")
    Variedad findByID(@Param("id") Long id);
}
