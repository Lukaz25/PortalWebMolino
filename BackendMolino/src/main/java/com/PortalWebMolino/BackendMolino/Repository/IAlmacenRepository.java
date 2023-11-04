package com.PortalWebMolino.BackendMolino.Repository;


import com.PortalWebMolino.BackendMolino.Entity.Almacen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IAlmacenRepository extends JpaRepository<Almacen, Long> {
    @Query("SELECT a FROM Almacen a WHERE a.idalmacen= :id")
    Almacen findByID(@Param("id") Long id);
}
