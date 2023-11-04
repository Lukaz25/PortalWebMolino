package com.PortalWebMolino.BackendMolino.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "variedad")
public class Variedad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idvariedad")
    private Long idvariedad;

    private String descripcion;
    private String estado;
}
