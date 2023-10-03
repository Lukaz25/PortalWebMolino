package com.PortalWebMolino.BackendMolino.Repository;

import com.PortalWebMolino.BackendMolino.Entity.Tipo_doc_identidad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ITipo_doc_identidadRepository extends JpaRepository<Tipo_doc_identidad, String> {
    @Query("SELECT td FROM Tipo_doc_identidad td WHERE td.idtipo_doc_identidad= :id")
    Tipo_doc_identidad findByID(@Param("id") String id);
}
