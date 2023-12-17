package com.PortalWebMolino.BackendMolino.Controller;

import com.PortalWebMolino.BackendMolino.Entity.Dto.UbigeoDto;
import com.PortalWebMolino.BackendMolino.Entity.Ubigeo;
import com.PortalWebMolino.BackendMolino.Service.UbigeoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/Ubigeo")
public class UbigeoController {
    @Autowired
    private UbigeoService ubigeoService;

    @GetMapping
    public List<Ubigeo> ObtenerTodos() {
        return  ubigeoService.ObtenerTodos();
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Ubigeo>> ObtenerporId(@PathVariable("id") String id) {
        return ResponseEntity.status(HttpStatus.OK).body(ubigeoService.ObtenerporId(id));
    }
}
