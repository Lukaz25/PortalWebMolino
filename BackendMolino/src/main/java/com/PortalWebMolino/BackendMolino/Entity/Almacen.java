package com.PortalWebMolino.BackendMolino.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="almacen")
public class Almacen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idalmacen")
    private Long idalmacen;
    private String descripcion;
    private String estado;
}
