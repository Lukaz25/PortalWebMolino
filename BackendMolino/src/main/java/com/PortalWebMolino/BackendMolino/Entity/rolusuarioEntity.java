package com.PortalWebMolino.BackendMolino.Entity;


import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;


@NoArgsConstructor
@Entity
@Table(name = "rolusuario")
public class rolusuarioEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idrol;
    @Column(name="nombre")
    @NonNull
    private String nombre;
    public int getIdrol() {
        return idrol;
    }

    public void setIdrol(int idrol) {
        this.idrol = idrol;
    }

    @NonNull
    public String getNombre() {
        return nombre;
    }

    public void setNombre(@NonNull String nombre) {
        this.nombre = nombre;
    }

}
