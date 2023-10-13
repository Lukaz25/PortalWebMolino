package com.PortalWebMolino.BackendMolino.Entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;

import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idusuario;

    @Column(name = "username",unique = true)
    @NonNull
    private String username;

    @Column(name = "password")
    @NonNull
    private String password;

    @Column(name = "email",unique = true)
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

    @Temporal(TemporalType.TIMESTAMP)
    Date f_create;

    @Column(name = "user_delete")
    private String user_delete;

    @Temporal(TemporalType.TIMESTAMP)
    Date f_delete;

    @Column(name = "idpersona")
    @NonNull
    private String idpersona;

    @ManyToOne
    @JoinColumn(name = "idrol")
    private Rolusuario rolusuario;
}
