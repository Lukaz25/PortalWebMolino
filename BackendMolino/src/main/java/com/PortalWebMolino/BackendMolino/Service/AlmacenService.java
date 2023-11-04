package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Almacen;
import com.PortalWebMolino.BackendMolino.Repository.IAlmacenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class AlmacenService {

    IAlmacenRepository iRepository;
    @Autowired
    public AlmacenService(IAlmacenRepository iRepository){
        this.iRepository=iRepository;
    }

    public Almacen Crear(Almacen almacen) {
        return iRepository.save(almacen);
    }

    public List<Almacen> ObtenerTodos() {
        return iRepository.findAll();
    }

    public Optional<Almacen> ObtenerporId(Long id) {
        return Optional.ofNullable(iRepository.findByID(id));
    }

    public Almacen Actualizar(Almacen almacen) {
        if (almacen.getIdalmacen() != null && iRepository.existsById(almacen.getIdalmacen())) {
            return iRepository.save(almacen);
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
