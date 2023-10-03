package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Tipo_doc_identidad;
import com.PortalWebMolino.BackendMolino.Repository.ITipo_doc_identidadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Tipo_doc_identidadService {
    @Autowired
    ITipo_doc_identidadRepository iTipoDocIdentidadRepository;

    public Page<Tipo_doc_identidad> ObtenerTodos (Integer page, Integer size, Boolean enablePagination) {
        return iTipoDocIdentidadRepository.findAll(enablePagination ? PageRequest.of(page,size): Pageable.unpaged());
    }
    public Optional<Tipo_doc_identidad> ObtenerporId(String id){
        return Optional.ofNullable(iTipoDocIdentidadRepository.findByID(id));
    }


}
