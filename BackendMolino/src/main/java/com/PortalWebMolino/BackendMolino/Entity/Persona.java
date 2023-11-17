package com.PortalWebMolino.BackendMolino.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "persona")
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idpersona")
    private Long idpersona;
    private String nombre;
    @Size(max = 20)
    private String nro_doc_identidad;
    @NotBlank
    private String direccion;
    @NotBlank
    private String celular;
    private String observacion;
    @Column(length = 1)
    private String estado;
    private String sistema;

    private String user_create;
    @Column
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm", timezone = "America/Lima")
    private Date f_create;

    private String user_delete;
    @Column
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm", timezone = "America/Lima")
    private Date f_delete;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idtipo_persona", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Tipo_persona tipoPersona;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idtipo_doc_identidad", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Tipo_doc_identidad tipoDocIdentidad;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idubigeo", nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Ubigeo ubigeo;
}
