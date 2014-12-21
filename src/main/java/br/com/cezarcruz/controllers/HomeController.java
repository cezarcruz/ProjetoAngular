package br.com.cezarcruz.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@RequestMapping("/oi")
	public String oi() {
		return "Oi mundo";
	}
}
