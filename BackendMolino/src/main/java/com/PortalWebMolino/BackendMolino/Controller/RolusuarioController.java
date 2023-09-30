package com.PortalWebMolino.BackendMolino.Controller;

import com.PortalWebMolino.BackendMolino.Entity.Rolusuario;
import com.PortalWebMolino.BackendMolino.Service.RolusuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;
import javax.validation.Valid;

@RestController
@RequestMapping("api/Rolusuario")
@RequiredArgsConstructor
public class RolusuarioController {
    @Autowired
    private RolusuarioService rolusuarioService;

    @PostMapping
    public ResponseEntity<Rolusuario> Crear(@Valid @RequestBody Rolusuario rolusuario){
        return
                ResponseEntity.status(HttpStatus.CREATED).body(rolusuarioService.Crear(rolusuario));
    }
    @GetMapping
    public ResponseEntity<Page<Rolusuario>> ObtenerTodos(
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = "10") Integer size,
            @RequestParam(required = false, defaultValue = "false") Boolean enablePagination
    ){
        return ResponseEntity.ok(rolusuarioService.ObtenerTodos(page,size,enablePagination));
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Rolusuario>> ObtenerporId(@PathVariable("id") Long id ){
        return ResponseEntity.status(HttpStatus.OK).body(rolusuarioService.ObtenerporId(id));
    }
    @PutMapping
    public ResponseEntity<Rolusuario> Actualizar(@Valid @RequestBody Rolusuario rolusuario){
        return ResponseEntity.status(HttpStatus.CREATED).body(rolusuarioService.Actualizar(rolusuario));
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity Eliminar(@PathVariable("id") Long id){
        rolusuarioService.Eliminar(id);
        return ResponseEntity.ok(!rolusuarioService.ExistById(id));
    }
}
