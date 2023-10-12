package com.PortalWebMolino.BackendMolino.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.autoconfigure.web.WebProperties;
import org.springframework.lang.NonNull;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idusuario;
    @Column(name = "username")
    @NonNull
    private String username;
    @Column(name = "contraseña")
    @NonNull
    private String contraseña;
    @Column(name = "email")
    @NonNull
    private String email;
    @Column(name = "estado")
    @NonNull
    private String estado;
    @Column(name = "sistema")
    @NonNull
    private String sistema;
    @Column(name = "user_create")
    @NonNull
    private String user_create;
    @Column(name = "user_delete")
    @NonNull
    private String user_delete;
    @Column(name = "idpersona")
    @NonNull
    private String idpersona;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idrol")
    private Rolusuario rolusuario;


    //f_create date

    //f_delete date
}
