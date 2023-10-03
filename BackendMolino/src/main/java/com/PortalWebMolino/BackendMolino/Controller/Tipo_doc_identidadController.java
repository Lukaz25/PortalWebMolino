package com.PortalWebMolino.BackendMolino.Controller;

import com.PortalWebMolino.BackendMolino.Entity.Tipo_doc_identidad;
import com.PortalWebMolino.BackendMolino.Service.Tipo_doc_identidadService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/Tipo_doc_identidad")
@RequiredArgsConstructor
public class Tipo_doc_identidadController {
    @Autowired
    private Tipo_doc_identidadService tipo_doc_identidadService;
    @GetMapping
    public ResponseEntity<Page<Tipo_doc_identidad>> ObtenerTodos(
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size,
            @RequestParam(required = false, defaultValue = "false") Boolean enablePagination
    ){
        return ResponseEntity.ok(tipo_doc_identidadService.ObtenerTodos(page,size,enablePagination));
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Tipo_doc_identidad>> ObtenerporId(@PathVariable("id") String id ){
        return ResponseEntity.status(HttpStatus.OK).body(tipo_doc_identidadService.ObtenerporId(id));
    }
}
