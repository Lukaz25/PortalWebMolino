package com.PortalWebMolino.BackendMolino.Entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;

@Getter
@Setter
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

}
