package com.PortalWebMolino.BackendMolino.Entity;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

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

    public Long getIdtipo_persona() {
        return idtipo_persona;
    }

    public void setIdtipo_persona(Long idtipo_persona) {
        this.idtipo_persona = idtipo_persona;
    }

    @NonNull
    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(@NonNull String descripcion) {
        this.descripcion = descripcion;
    }

    @Nullable
    public String getEstado() {
        return estado;
    }

    public void setEstado(@Nullable String estado) {
        this.estado = estado;
    }
}
