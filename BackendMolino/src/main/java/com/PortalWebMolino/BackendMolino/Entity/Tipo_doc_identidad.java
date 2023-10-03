package com.PortalWebMolino.BackendMolino.Entity;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import org.springframework.lang.NonNull;

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

    public String getIdtipo_doc_identidad() {
        return idtipo_doc_identidad;
    }

    public void setIdtipo_doc_identidad(String idtipo_doc_identidad) {
        this.idtipo_doc_identidad = idtipo_doc_identidad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @NonNull
    public Double getLongitud() {
        return longitud;
    }

    public void setLongitud(@NonNull Double longitud) {
        this.longitud = longitud;
    }
}
