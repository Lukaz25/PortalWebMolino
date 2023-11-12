package com.PortalWebMolino.BackendMolino.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SesionDto {
    private Long idusuario;
    private String personaDescripcion;
    private String username;
    private String rolNombre;
    private String token;
}