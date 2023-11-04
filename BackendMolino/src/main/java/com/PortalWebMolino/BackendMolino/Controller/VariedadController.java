package com.PortalWebMolino.BackendMolino.Controller;
import com.PortalWebMolino.BackendMolino.Entity.Variedad;
import com.PortalWebMolino.BackendMolino.Service.VariedadService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("api/Variedad")
@RequiredArgsConstructor
public class VariedadController {
    @Autowired
    private VariedadService variedadService;

    @PostMapping
    public ResponseEntity<Variedad> Crear(@Valid @RequestBody Variedad variedad) {
        return
                new ResponseEntity<>(variedadService.Crear(variedad), HttpStatus.CREATED);
    }
    @GetMapping
    public List<Variedad> ObtenerTodos() {
        return variedadService.ObtenerTodos();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Variedad>> ObtenerporId(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(variedadService.ObtenerporId(id));
    }

    @PutMapping
    public ResponseEntity<Variedad> Actualizar(@Valid @RequestBody Variedad variedad) {
        return ResponseEntity.status(HttpStatus.CREATED).body(variedadService.Actualizar(variedad));
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> Eliminar(@PathVariable("id") Long id) {
        variedadService.Eliminar(id);
        return ResponseEntity.ok(!variedadService.ExistById(id));
    }
}
