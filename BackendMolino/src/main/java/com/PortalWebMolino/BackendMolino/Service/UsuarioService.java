package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Dto.SesionDto;
import com.PortalWebMolino.BackendMolino.Entity.Usuario;
import com.PortalWebMolino.BackendMolino.Repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class UsuarioService {
    @Autowired
    IUsuarioRepository iRepository;

    public SesionDto IniciarSesion(String username, String pass) {
        Usuario usuario = iRepository.findByNameAndPass(username, pass);
        if (usuario == null) {
            usuario = iRepository.findByEmailandPass(username, pass);
        }
        if (usuario != null) {
            return crearSesionDto(usuario);
        } else {
            return null;
        }
    }
    private SesionDto crearSesionDto(Usuario usuario) {

        return new SesionDto(usuario.getIdusuario(), usuario.getEmail(), usuario.getUsername(), usuario.getRolusuario().getNombre().toString());
    }
    public Usuario Crear(Usuario usuario) {
        return iRepository.save(usuario);
    }

    public List<Usuario> ObtenerTodos() {
        return iRepository.findAll();
    }

    public Optional<Usuario> ObtenerporId(Long id) {
        return Optional.ofNullable(iRepository.findByID(id));

    }

    public Usuario Actualizar(Usuario usuario) {
        if (usuario.getIdusuario() != null && iRepository.existsById(usuario.getIdusuario())) {
            return iRepository.save(usuario);
        }
        return null;
    }

    public void Eliminar(Long id) {
        iRepository.deleteById(id);
    }

    public boolean ExistById(Long id) {
        return iRepository.existsById(id);
    }
}
