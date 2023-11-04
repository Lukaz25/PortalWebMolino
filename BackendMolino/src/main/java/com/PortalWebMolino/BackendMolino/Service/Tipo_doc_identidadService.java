package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Tipo_doc_identidad;
import com.PortalWebMolino.BackendMolino.Repository.ITipo_doc_identidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class Tipo_doc_identidadService {
    @Autowired
    ITipo_doc_identidadRepository iRepository;

    public List<Tipo_doc_identidad> ObtenerTodos() {
        return iRepository.findAll();
    }

    public Optional<Tipo_doc_identidad> ObtenerporId(String id) {
        return Optional.ofNullable(iRepository.findByID(id));
    }
}
