package com.PortalWebMolino.BackendMolino.Entity.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioDto {
    private Long idusuario;
    private String username;
    private String email;
    private Long idrol;
    private String rolNombre;
    private String password;
    private String estado;
    private String idpersona;
    private String personaDescripcion;
    private Date f_create;
}
