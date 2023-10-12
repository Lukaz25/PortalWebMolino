package com.PortalWebMolino.BackendMolino.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "tipo_persona")
public class Tipo_persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idtipo_persona;
    @Column(name = "descripcion")
    @NonNull
    private String descripcion;
    @Column(name = "estado")
    @Nullable
    private String estado;

}
