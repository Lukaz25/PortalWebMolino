package com.PortalWebMolino.BackendMolino.Service;

import com.PortalWebMolino.BackendMolino.Entity.Rolusuario;
import com.PortalWebMolino.BackendMolino.Repository.IRolusuarioRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class RolusuarioServiceTest {
    @Autowired
    private MockMvc mockMvc;
    @Mock
    private IRolusuarioRepository iRolusuarioRepository;
    @InjectMocks
    private RolusuarioService rolusuarioService;

    @BeforeEach
    void SetUp() {
        MockitoAnnotations.initMocks(this);
    }

    @DisplayName("Test de Obtener Todos los roles")
    @Test
    void ObtenerTodos() {
        when(iRolusuarioRepository.findAll()).thenReturn(buildRolusuarioList());
        var result = rolusuarioService.ObtenerTodos();

        Assertions.assertAll(
                "Testing Roles",
                () -> Assertions.assertTrue(result.size() > 0, "Verifica Tamaño"),
                () -> Assertions.assertTrue(result != null, "Verificar no nulo"),
                () -> Assertions.assertEquals(result, buildRolusuarioList(), "Comparacion de Listas")
        );

        //assertTrue(result!=null);
        //assertNotNull(result);
        //assertEquals(buildRolusuarioList(),result);

    }
    @Test
    void test() throws Exception {
        Mockito.when(rolusuarioService.ObtenerporId(1L))
                .thenReturn(Optional.of(new Rolusuario(1L, "SOPORTE")));

        mockMvc.perform(get("/Rolusuario/{id}", 1L))
                .andExpect(status().isOk());
    }

    private List<Rolusuario> buildRolusuarioList() {
        Rolusuario rolusuario = new Rolusuario();
        rolusuario.setNombre("ADMIN-MOLINO");
        rolusuario.setIdrol(2000L);
        return List.of(rolusuario);
    }

    @DisplayName("Test de Obtener rol")
    @Test
    public void ObtenerRolusuario() {
        Rolusuario objetoSimulado = new Rolusuario(1L, "PRUEBA");
        Rolusuario esperado = new Rolusuario(1L, "PRUEBA");
        when(iRolusuarioRepository.getById(1L))
                .thenReturn(objetoSimulado);
        final Optional<Rolusuario> resultado = rolusuarioService.ObtenerporId(1L);
        Assertions.assertEquals(esperado, resultado);
        Mockito.verify(iRolusuarioRepository).findByID(1L);

    }
}
