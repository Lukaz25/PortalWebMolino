package com.PortalWebMolino.BackendMolino.Controller;

import com.PortalWebMolino.BackendMolino.Entity.Tipo_persona;
import com.PortalWebMolino.BackendMolino.Service.Tipo_personaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/Tipo_persona")
@RequiredArgsConstructor
public class Tipo_personaController {
    @Autowired
    private Tipo_personaService tipo_personaService;

    @PostMapping
    public ResponseEntity<Tipo_persona> Crear(@Valid @RequestBody Tipo_persona tipo_persona) {
        return
                new ResponseEntity<>(tipo_personaService.Crear(tipo_persona), HttpStatus.CREATED);
    }

    @GetMapping
    public List<Tipo_persona> ObtenerTodos() {
        return tipo_personaService.ObtenerTodos();
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Tipo_persona>> ObtenerporId(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(tipo_personaService.ObtenerporId(id));
    }

    @PutMapping
    public ResponseEntity<Tipo_persona> Actualizar(@Valid @RequestBody Tipo_persona tipo_persona) {
        return ResponseEntity.status(HttpStatus.CREATED).body(tipo_personaService.Actualizar(tipo_persona));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> Eliminar(@PathVariable("id") Long id) {
        tipo_personaService.Eliminar(id);
        return ResponseEntity.ok(!tipo_personaService.ExistById(id));
    }
}
