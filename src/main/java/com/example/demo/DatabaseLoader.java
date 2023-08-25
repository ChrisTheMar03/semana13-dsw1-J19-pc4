package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository dataP;
	private final DetalleVentaRepository dataDV;

	@Autowired
	public DatabaseLoader(
		ProductoRepository dataP,
		DetalleVentaRepository dataDV
		) {
		this.dataP = dataP;
		this.dataDV = dataDV;
	}

	@Override
	public void run(String... strings) throws Exception {
		Producto p1=new Producto("Calcetines", 5.50f);
		Producto p2=new Producto("Polo Azul", 20.00f);
		Producto p3=new Producto("Pantalon", 35.50f);
		this.dataP.save(p1);
		this.dataP.save(p2);
		this.dataP.save(p3);

		DetalleVenta dt1=new DetalleVenta( p1, 2);
		DetalleVenta dt2=new DetalleVenta( p3, 3);
		DetalleVenta dt3=new DetalleVenta( p2, 2);
		DetalleVenta dt4=new DetalleVenta( p1, 1);
		
		this.dataDV.save(dt1);
		this.dataDV.save(dt2);
		this.dataDV.save(dt3);
		this.dataDV.save(dt4);

	}
}