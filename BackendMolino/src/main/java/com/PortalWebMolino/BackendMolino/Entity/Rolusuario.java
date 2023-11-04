package com.PortalWebMolino.BackendMolino.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "rolusuario")
public class Rolusuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idrol")
    private Long idrol;
    private String nombre;

    @JsonIgnore
    @OneToMany(mappedBy ="rolusuario")
    private List<Usuario> usuarios;
}
