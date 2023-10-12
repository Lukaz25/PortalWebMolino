package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Rolusuario;
import com.PortalWebMolino.BackendMolino.Repository.IRolusuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RolusuarioService {
    @Autowired
    IRolusuarioRepository iRolusuarioRepository;

    public Rolusuario Crear(Rolusuario rolusuario) {
        return iRolusuarioRepository.save(rolusuario);
    }

    public List<Rolusuario> ObtenerTodos() {
        return iRolusuarioRepository.findAll();
    }

    public Optional<Rolusuario> ObtenerporId(Long id) {
        return Optional.ofNullable(iRolusuarioRepository.findByID(id));
    }

    public Rolusuario Actualizar(Rolusuario rolusuario) {
        if (rolusuario.getIdrol() != null && iRolusuarioRepository.existsById(rolusuario.getIdrol())) {
            return iRolusuarioRepository.save(rolusuario);
        }
        return null;
    }

    public void Eliminar(Long id) {
        iRolusuarioRepository.deleteById(id);
    }

    public boolean ExistById(Long id) {
        return iRolusuarioRepository.existsById(id);
    }
}
