package com.PortalWebMolino.BackendMolino.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tipo_persona")
public class Tipo_persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idtipo_persona")
    private Long idtipo_persona;
    @Column(unique = true)
    @NotBlank
    private String descripcion;
    private String estado;
}
