package com.PortalWebMolino.BackendMolino.Entity;


import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;


@NoArgsConstructor
@Entity
@Table(name = "rolusuario")
public class Rolusuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idrol;
    @Column(name="nombre")
    @NonNull
    private String nombre;
    public Long getIdrol() {return idrol;}
    public void setIdrol(Long idrol) {
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
