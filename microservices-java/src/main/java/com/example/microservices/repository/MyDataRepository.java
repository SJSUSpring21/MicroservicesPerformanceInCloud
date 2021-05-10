package com.example.microservices.repository;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.microservies.models.MyData;

public interface MyDataRepository extends MongoRepository<MyData, String> {
	List<MyData> findAll();
	List<MyData> findByElite(String elite);
	List<MyData> findByName(String name);
}
