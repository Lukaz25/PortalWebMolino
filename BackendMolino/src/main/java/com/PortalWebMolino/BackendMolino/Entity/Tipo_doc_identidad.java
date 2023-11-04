package com.PortalWebMolino.BackendMolino.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tipo_doc_identidad")
public class Tipo_doc_identidad {
    @Id
    @Column(name = "idtipo_doc_identidad")
    private String idtipo_doc_identidad;

    private String descripcion;
    private Double longitud;
}
