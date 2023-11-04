package com.PortalWebMolino.BackendMolino.Dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SesionDto {
    private Long idusuario;
    private String personaDescripcion;
    private String username;
    private String rolNombre;

    public SesionDto(Long idusuario, String personaDescripcion, String username, String rolNombre) {
        this.idusuario = idusuario;
        this.personaDescripcion = personaDescripcion;
        this.username = username;
        this.rolNombre = rolNombre;
    }
}
