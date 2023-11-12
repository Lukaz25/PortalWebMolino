package com.PortalWebMolino.BackendMolino.Repository;

import com.PortalWebMolino.BackendMolino.Entity.Ubigeo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IUbigeoRepository extends JpaRepository <Ubigeo,String>{
    @Query("SELECT ub FROM Ubigeo ub WHERE ub.idubigeo= :id")
    Ubigeo findByID(@Param("id") String id);
}
