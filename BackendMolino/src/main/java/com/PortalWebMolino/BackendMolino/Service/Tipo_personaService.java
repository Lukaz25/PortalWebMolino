package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Tipo_persona;
import com.PortalWebMolino.BackendMolino.Repository.ITipo_personaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class Tipo_personaService {
    @Autowired
    ITipo_personaRepository iRepository;

    public Tipo_persona Crear(Tipo_persona tipo_persona) {
        return iRepository.save(tipo_persona);
    }

    public List<Tipo_persona> ObtenerTodos() {
        return iRepository.findAll();
    }

    public Optional<Tipo_persona> ObtenerporId(Long id) {
        return Optional.ofNullable(iRepository.findByID(id));
    }

    public Tipo_persona Actualizar(Tipo_persona tipo_persona) {
        if (tipo_persona.getIdtipo_persona() != null && iRepository.existsById(tipo_persona.getIdtipo_persona())) {
            return iRepository.save(tipo_persona);
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
