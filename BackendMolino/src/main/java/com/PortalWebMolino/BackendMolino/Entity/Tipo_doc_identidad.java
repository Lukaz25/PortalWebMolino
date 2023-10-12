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
@Table(name = "tipo_doc_identidad")
public class Tipo_doc_identidad {
    @Id
    private String idtipo_doc_identidad;
    @Column(name = "descripcion")
    private String nombre;
    @Column(name = "longitud")
    @NonNull
    private Double longitud;


}
