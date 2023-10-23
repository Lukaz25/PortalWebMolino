package com.PortalWebMolino.BackendMolino.Entity.Dto;

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

    public SesionDto(Long idusuario, String email, String username, String nombre) {
        this.idusuario=idusuario;
        this.personaDescripcion=email;
        this.username=username;
        this.rolNombre=getRolNombre();
    }
}
