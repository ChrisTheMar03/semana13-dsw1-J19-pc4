package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.DetalleVenta;

@RepositoryRestResource(collectionResourceRel = "detalleventas",path = "detalleventas")
public interface DetalleVentaRepository extends CrudRepository<DetalleVenta,Long> {
    
}
