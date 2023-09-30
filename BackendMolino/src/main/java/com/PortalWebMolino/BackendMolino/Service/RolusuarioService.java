package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Rolusuario;
import com.PortalWebMolino.BackendMolino.Repository.IRolusuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RolusuarioService {
    @Autowired
    IRolusuarioRepository iRolusuarioRepository;

    public Rolusuario Crear (Rolusuario rolusuario){
        if (rolusuario.getIdrol() != null ) {
            return iRolusuarioRepository.save(rolusuario);
        }
        return null;
        }
    public Page<Rolusuario> ObtenerTodos (Integer page, Integer size, Boolean enablePagination) {
        return iRolusuarioRepository.findAll(enablePagination ? PageRequest.of(page,size): Pageable.unpaged());
    }
    public Optional<Rolusuario> ObtenerporId(Long id){
        return Optional.ofNullable(iRolusuarioRepository.findByID(id));
    }
    public Rolusuario Actualizar (Rolusuario rolusuario){
        if(rolusuario.getIdrol()!= null && iRolusuarioRepository.existsById(rolusuario.getIdrol())){
            return iRolusuarioRepository.save(rolusuario);
        }
        return null;
    }
    public void Eliminar(Long id){
        iRolusuarioRepository.deleteById(id);
    }
    public boolean ExistById(Long id){
        return iRolusuarioRepository.existsById(id);
    }
}
