package com.example.microservices.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.microservices.repository.MyDataRepository;
import com.example.microservies.models.MyData;


@Service
public class MyDataServiceImpl implements MyDataService{

	  @Autowired
	    private MyDataRepository myDataRepository;


	@Override
	public List<MyData> findByElite(String elite) {
		// TODO Auto-generated method stub
		return myDataRepository.findByElite(elite);
	}


	@Override
	public List<MyData> findByName(String name) {
		// TODO Auto-generated method stub
		return myDataRepository.findByName(name);
	}

}
