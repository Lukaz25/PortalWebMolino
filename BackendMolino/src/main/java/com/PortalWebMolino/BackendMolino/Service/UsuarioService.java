package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Dto.SesionDto;
import com.PortalWebMolino.BackendMolino.Entity.Usuario;
import com.PortalWebMolino.BackendMolino.Repository.IRolusuarioRepository;
import com.PortalWebMolino.BackendMolino.Repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    IUsuarioRepository iUsuarioRepository;
    IRolusuarioRepository iRolusuarioRepository;

    public SesionDto IniciarSesion(String username, String pass) {
        Usuario usuario = iUsuarioRepository.findByNameAndPass(username, pass);
        if (usuario == null) {
            usuario = iUsuarioRepository.findByEmailandPass(username, pass);
        }
        if (usuario != null) {
            return crearSesionDto(usuario);
        } else {
            return null;
        }
    }
    private SesionDto crearSesionDto(Usuario usuario) {

        return new SesionDto(usuario.getIdusuario(), usuario.getEmail(), usuario.getUsername(), usuario.getRolusuario().getNombre());
    }
    public Usuario Crear(Usuario usuario) {
        return iUsuarioRepository.save(usuario);
    }

    public List<Usuario> ObtenerTodos() {
        return iUsuarioRepository.findAll();
    }

    public Optional<Usuario> ObtenerporId(Long id) {
        return Optional.ofNullable(iUsuarioRepository.findByID(id));

    }

    public Optional<Usuario> ObtenerporNombre(String username) {
        return Optional.ofNullable(iUsuarioRepository.findByName(username));

    }
    public Optional<Usuario> ObtenerporNombreyPass(String username, String pass) {
        return Optional.ofNullable(iUsuarioRepository.findByNameAndPass(username,pass));

    }
    public Optional<Usuario> ObtenerporEmail(String email) {
        return Optional.ofNullable(iUsuarioRepository.findByEmail(email));
    }
    public Optional<Usuario> ObtenerporEmailyPass(String email, String pass) {
        return Optional.ofNullable(iUsuarioRepository.findByEmailandPass(email,pass));

    }
    public Usuario Actualizar(Usuario usuario) {
        if (usuario.getIdusuario() != null && iUsuarioRepository.existsById(usuario.getIdusuario())) {
            return iUsuarioRepository.save(usuario);
        }
        return null;
    }

    public void Eliminar(Long id) {
        iUsuarioRepository.deleteById(id);
    }

    public boolean ExistById(Long id) {
        return iUsuarioRepository.existsById(id);
    }
}
