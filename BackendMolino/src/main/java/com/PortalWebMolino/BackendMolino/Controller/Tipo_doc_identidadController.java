package com.PortalWebMolino.BackendMolino.Controller;

import com.PortalWebMolino.BackendMolino.Entity.Tipo_doc_identidad;
import com.PortalWebMolino.BackendMolino.Service.Tipo_doc_identidadService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/Tipo_doc_identidad")
@RequiredArgsConstructor
public class Tipo_doc_identidadController {
    @Autowired
    private Tipo_doc_identidadService tipo_doc_identidadService;

    @GetMapping
    public List<Tipo_doc_identidad> ObtenerTodos() {
        return tipo_doc_identidadService.ObtenerTodos();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Tipo_doc_identidad>> ObtenerporId(@PathVariable("id") String id) {
        return ResponseEntity.status(HttpStatus.OK).body(tipo_doc_identidadService.ObtenerporId(id));
    }
}
