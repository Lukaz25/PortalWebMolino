package com.PortalWebMolino.BackendMolino.Entity.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SesionDto {
    private Long idusuario;
    private String personaDescripcion;
    private String username;
    private String rolNombre;
    private String token;

    public SesionDto(Long idusuario, String personaDescripcion, String username, String rolNombre, String token) {
        this.idusuario = idusuario;
        this.personaDescripcion = personaDescripcion;
        this.username = username;
        this.rolNombre = rolNombre;
        this.token = token;
    }
}
