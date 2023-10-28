package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Variedad;
import com.PortalWebMolino.BackendMolino.Repository.IVariedadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VariedadService {
    @Autowired
    IVariedadRepository iVariedadRepository;

    public Variedad Crear(Variedad variedad) {
        return iVariedadRepository.save(variedad);
    }

    public List<Variedad> ObtenerTodos() {
        return iVariedadRepository.findAll();
    }

    public Optional<Variedad> ObtenerporId(Long id) {
        return Optional.ofNullable(iVariedadRepository.findByID(id));

    }
    public Variedad Actualizar(Variedad variedad) {
        if (variedad.getIdvariedad() != null && iVariedadRepository.existsById(variedad.getIdvariedad())) {
            return iVariedadRepository.save(variedad);
        }
        return null;
    }

    public void Eliminar(Long id) {
        iVariedadRepository.deleteById(id);
    }

    public boolean ExistById(Long id) {
        return iVariedadRepository.existsById(id);
    }
}

