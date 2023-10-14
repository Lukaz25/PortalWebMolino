package com.PortalWebMolino.BackendMolino.Configurations;

import jakarta.servlet.*;


import java.io.IOException;


public class JwtFilterConfiguration extends GenericFilter {
    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain filterChain)
            throws IOException, ServletException {

    }
}
