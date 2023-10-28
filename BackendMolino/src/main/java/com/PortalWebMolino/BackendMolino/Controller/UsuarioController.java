package com.PortalWebMolino.BackendMolino.Controller;

import com.PortalWebMolino.BackendMolino.Entity.Dto.LoginDto;
import com.PortalWebMolino.BackendMolino.Entity.Dto.SesionDto;
import com.PortalWebMolino.BackendMolino.Entity.Usuario;
import com.PortalWebMolino.BackendMolino.Service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = "*")

@RestController
@RequestMapping("api/Usuario")
@RequiredArgsConstructor
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;
    @PostMapping("/IniciarSesion")
    public ResponseEntity<SesionDto> iniciarSesion(@Valid @RequestBody LoginDto loginDto) {
            SesionDto sesionDto = usuarioService.IniciarSesion(loginDto.getUsername(), loginDto.getPassword());
            return ResponseEntity.ok(sesionDto);
    }
    @PostMapping
    public ResponseEntity<Usuario> Crear(@Valid @RequestBody Usuario usuario) {
        return
                new ResponseEntity<>(usuarioService.Crear(usuario), HttpStatus.CREATED);
    }
    @GetMapping
    public List<Usuario> ObtenerTodos() {
        return usuarioService.ObtenerTodos();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Usuario>> ObtenerporId(@PathVariable("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.ObtenerporId(id));
    }
}
