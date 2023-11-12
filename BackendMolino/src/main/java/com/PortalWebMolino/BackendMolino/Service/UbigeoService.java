package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Ubigeo;
import com.PortalWebMolino.BackendMolino.Repository.IUbigeoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UbigeoService {
    @Autowired
    IUbigeoRepository iRepository;

    public List<Ubigeo> ObtenerTodos() {
        return iRepository.findAll();
    }

    public Optional<Ubigeo> ObtenerporId(String id) {
        return Optional.ofNullable(iRepository.findByID(id));
    }
}
