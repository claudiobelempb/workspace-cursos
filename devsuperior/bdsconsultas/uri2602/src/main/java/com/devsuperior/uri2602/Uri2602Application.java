package com.devsuperior.uri2602;

import com.devsuperior.uri2602.dto.CustomerNameDTO;
import com.devsuperior.uri2602.projections.CustomerNameProjection;
import com.devsuperior.uri2602.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import java.util.stream.Collectors;

@SpringBootApplication
public class Uri2602Application implements CommandLineRunner {
	@Autowired
	private CustomerRepository customerRepository;

	public static void main(String[] args) {
		SpringApplication.run(Uri2602Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		List<CustomerNameProjection> list = customerRepository.name1("RS");
		List<CustomerNameDTO> result1 = list.stream().map(x -> new CustomerNameDTO(x)).collect(Collectors.toList());

		System.out.println("/n*** RESULTADO SQL RAIZ: ");
    for (CustomerNameDTO obj : result1){
      System.out.println(obj);
		}



		List<CustomerNameDTO> result2 = customerRepository.name2("RS");

		System.out.println("/n*** RESULTADO SQL JPQL: ");
		for (CustomerNameDTO obj : result2){
			System.out.println(obj);
		}
	}
}
