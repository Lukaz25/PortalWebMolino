package com.PortalWebMolino.BackendMolino.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ubigeo")
public class Ubigeo {
    @Id
    @Column(name = "idubigeo")
    private String idubigeo;

    private String distrito;
    private String provincia;
    private String departamento;
}
