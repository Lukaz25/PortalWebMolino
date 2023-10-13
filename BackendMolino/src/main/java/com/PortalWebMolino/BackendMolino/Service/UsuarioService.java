package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Usuario;
import com.PortalWebMolino.BackendMolino.Repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    IUsuarioRepository iUsuarioRepository;

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
