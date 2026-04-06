package com.inventory.backend.security;

import java.util.List;
import org.springframework.context.annotation.*;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.*;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http.csrf(csrf -> csrf.disable())
            .cors(cors -> {})
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/login", "/logout").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/books/**").hasAnyRole("USER","ADMIN")
                .requestMatchers(HttpMethod.POST, "/api/books/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/api/books/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/api/books/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginProcessingUrl("/login")
                .successHandler((req,res,auth)->res.setStatus(200))
                .failureHandler((req,res,ex)->res.setStatus(401))
            )
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessHandler((req,res,auth)->res.setStatus(200))
            );

        return http.build();
    }

    @Bean
public UserDetailsService userDetailsService() {

    UserDetails user = User.withUsername("user")
            .password(passwordEncoder().encode("1234"))   // ✅ FIXED
            .roles("USER")
            .build();

    UserDetails admin = User.withUsername("admin")
            .password(passwordEncoder().encode("1234"))   // ✅ FIXED
            .roles("ADMIN")
            .build();

    return new InMemoryUserDetailsManager(user, admin);
}

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("http://localhost:3000"));
        config.setAllowedMethods(List.of("GET","POST","PUT","DELETE","OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }
}
