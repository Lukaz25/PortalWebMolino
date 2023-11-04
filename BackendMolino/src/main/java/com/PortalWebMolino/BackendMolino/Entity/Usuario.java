package com.PortalWebMolino.BackendMolino.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import java.text.SimpleDateFormat;
import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "usuario")
public class Usuario {
    private static final SimpleDateFormat dateFormat
            = new SimpleDateFormat("dd-MM-yyyy HH:mm");

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idusuario")
    private Long idusuario;

    @Column(unique = true)
    private String username;
    private String password;

    @Column(unique = true)
    @Email
    private String email;
    private String estado;
    private String sistema;

    private String user_create;
    @Temporal(TemporalType.TIMESTAMP)
    private Date f_create;

    private String user_delete;
    @Temporal(TemporalType.TIMESTAMP)
    private Date f_delete;

    @Column(name = "idpersona")
    private String idpersona;

    @ManyToOne
    @JoinColumn(name = "idrol")
    private Rolusuario rolusuario;
}
