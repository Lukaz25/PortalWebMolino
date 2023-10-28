package com.PortalWebMolino.BackendMolino.Service;


import com.PortalWebMolino.BackendMolino.Entity.Tipo_persona;
import com.PortalWebMolino.BackendMolino.Repository.ITipo_personaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Tipo_personaService {
    @Autowired
    ITipo_personaRepository iTipo_personaRepository;

    public Tipo_persona Crear(Tipo_persona tipo_persona) {
        return iTipo_personaRepository.save(tipo_persona);
    }
    public List<Tipo_persona> ObtenerTodos() {
        return iTipo_personaRepository.findAll();
    }

    public Optional<Tipo_persona> ObtenerporId(Long id) {
        return Optional.ofNullable(iTipo_personaRepository.findByID(id));
    }

    public Tipo_persona Actualizar(Tipo_persona tipo_persona) {
        if (tipo_persona.getIdtipo_persona() != null && iTipo_personaRepository.existsById(tipo_persona.getIdtipo_persona())) {
            return iTipo_personaRepository.save(tipo_persona);
        }
        return null;
    }

    public void Eliminar(Long id) {
        iTipo_personaRepository.deleteById(id);
    }

    public boolean ExistById(Long id) {
        return iTipo_personaRepository.existsById(id);
    }
}
