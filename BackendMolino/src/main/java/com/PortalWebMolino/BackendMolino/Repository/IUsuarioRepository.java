package com.PortalWebMolino.BackendMolino.Repository;

import com.PortalWebMolino.BackendMolino.Entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario,Long> {
    @Query("SELECT u FROM Usuario u WHERE u.idusuario= :id")
    Usuario findByID(@Param("id") Long id);
    @Query("SELECT u FROM Usuario u WHERE u.username= :str1 and u.password= :str2")
    Usuario findByNameAndPass(@Param("str1") String str1,@Param("str2") String str2);
    @Query("SELECT u FROM Usuario u WHERE u.email= :str1 and u.password= :str2")
    Usuario findByEmailandPass(@Param("str1") String str1,@Param("str2") String str2);

}
