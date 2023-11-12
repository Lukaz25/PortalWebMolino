package com.PortalWebMolino.BackendMolino.Controller;

import com.PortalWebMolino.BackendMolino.Entity.Variedad;
import com.PortalWebMolino.BackendMolino.Service.VariedadService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class VariedadControllerTest{
        private MockMvc mockMvc;
        @InjectMocks
        private VariedadController lookupController;
        @Mock
        VariedadService variedadService;
        /**
         * @throws java.lang.Exception
         */
        @BeforeEach
        public void setUp() throws Exception {
            MockitoAnnotations.openMocks(this);
            this.mockMvc = MockMvcBuilders.standaloneSetup(lookupController).build();
        }
        @Test
        void whenSubmitUser_thenUserIdIsGenerated() throws Exception {
            Variedad newVariedad = new Variedad();
            newVariedad.setDescripcion("Test Variedad");
            newVariedad.setEstado("0");

            Variedad result = new Variedad();
            result.setDescripcion("My Refactor");
            result.setEstado("0");
            Long id = null;
            result.setIdvariedad(id);

            Mockito.when(variedadService.Crear(Mockito.any(Variedad.class))).thenReturn(result);

            this.mockMvc.perform(post("/").content(asJsonString(newVariedad))
                            .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andDo(print());

        }

        private static String asJsonString(final Object obj) {
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                return objectMapper.writeValueAsString(obj);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
}
