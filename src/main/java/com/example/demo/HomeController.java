package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(value="/api/detalleventas/formacion")
	public @ResponseBody List<Map<String,Object>> formacion(){
		String sql = "SELECT detalleventa.id as ID ,producto.nombre as PRODUCTO, detalleventa.cantidad as CANTIDAD FROM detalleventa JOIN producto on producto.id=detalleventa.id_producto";
		List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql);
		return queryResult;
	}

	/**
	 * 
	 * 
	 * 
	 * 
	 */

}