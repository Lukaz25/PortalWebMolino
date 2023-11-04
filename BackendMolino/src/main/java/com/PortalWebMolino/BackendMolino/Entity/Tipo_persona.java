package com.PortalWebMolino.BackendMolino.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tipo_persona")
public class Tipo_persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idtipo_persona")
    private Long idtipo_persona;

    private String descripcion;
    private String estado;
}
