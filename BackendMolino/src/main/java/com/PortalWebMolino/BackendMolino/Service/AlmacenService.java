package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Almacen;
import com.PortalWebMolino.BackendMolino.Repository.IAlmacenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AlmacenService {
    @Autowired
    IAlmacenRepository iAlmacenRepository;

    public Almacen Crear(Almacen almacen) {
        return iAlmacenRepository.save(almacen);
    }

    public List<Almacen> ObtenerTodos() {
        return iAlmacenRepository.findAll();
    }

    public Optional<Almacen> ObtenerporId(Long id) {
        return Optional.ofNullable(iAlmacenRepository.findByID(id));

    }
    public Almacen Actualizar(Almacen almacen) {
        if (almacen.getIdalmacen() != null && iAlmacenRepository.existsById(almacen.getIdalmacen())) {
            return iAlmacenRepository.save(almacen);
        }
        return null;
    }

    public void Eliminar(Long id) {
        iAlmacenRepository.deleteById(id);
    }

    public boolean ExistById(Long id) {
        return iAlmacenRepository.existsById(id);
    }
}
