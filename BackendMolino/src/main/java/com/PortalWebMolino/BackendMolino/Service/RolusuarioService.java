package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Rolusuario;
import com.PortalWebMolino.BackendMolino.Repository.IRolusuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RolusuarioService {
    @Autowired
    IRolusuarioRepository iRepository;

    public Rolusuario Crear(Rolusuario rolusuario) {
        return iRepository.save(rolusuario);
    }

    public List<Rolusuario> ObtenerTodos() {
        return iRepository.findAll();
    }

    public Optional<Rolusuario> ObtenerporId(Long id) {
        return Optional.ofNullable(iRepository.findByID(id));
    }

    public Rolusuario Actualizar(Rolusuario rolusuario) {
        if (rolusuario.getIdrol() != null && iRepository.existsById(rolusuario.getIdrol())) {
            return iRepository.save(rolusuario);
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
