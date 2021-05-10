package com.example.microservices.services;

import java.util.List;

import com.example.microservies.models.MyData;

public interface MyDataService {
	List<MyData> findByElite(String elite);
	List<MyData>findByName(String name);
	
}
