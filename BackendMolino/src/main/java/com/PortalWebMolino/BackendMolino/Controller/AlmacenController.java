package com.PortalWebMolino.BackendMolino.Controller;

import com.PortalWebMolino.BackendMolino.Entity.Almacen;
import com.PortalWebMolino.BackendMolino.Service.AlmacenService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/Almacen")
@RequiredArgsConstructor
public class AlmacenController {
    @Autowired
    private AlmacenService almacenService;

    @PostMapping
    public ResponseEntity<Almacen> Crear(@Valid @RequestBody Almacen almacen) {
        return
                new ResponseEntity<>(almacenService.Crear(almacen), HttpStatus.CREATED);
    }
    @GetMapping
    public List<Almacen> ObtenerTodos() {
        return almacenService.ObtenerTodos();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Almacen>> ObtenerporId(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(almacenService.ObtenerporId(id));
    }

    @PutMapping
    public ResponseEntity<Almacen> Actualizar(@Valid @RequestBody Almacen almacen) {
        return ResponseEntity.status(HttpStatus.CREATED).body(almacenService.Actualizar(almacen));
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> Eliminar(@PathVariable("id") Long id) {
        almacenService.Eliminar(id);
        return ResponseEntity.ok(!almacenService.ExistById(id));
    }
}
