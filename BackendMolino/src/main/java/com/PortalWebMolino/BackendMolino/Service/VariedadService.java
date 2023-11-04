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
    IVariedadRepository iRepository;

    public Variedad Crear(Variedad variedad) {
        return iRepository.save(variedad);
    }

    public List<Variedad> ObtenerTodos() {
        return iRepository.findAll();
    }

    public Optional<Variedad> ObtenerporId(Long id) {
        return Optional.ofNullable(iRepository.findByID(id));
    }

    public Variedad Actualizar(Variedad variedad) {
        if (variedad.getIdvariedad() != null && iRepository.existsById(variedad.getIdvariedad())) {
            return iRepository.save(variedad);
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
