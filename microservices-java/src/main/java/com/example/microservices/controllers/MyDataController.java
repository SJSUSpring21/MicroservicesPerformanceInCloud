package com.example.microservices.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.microservices.repository.MyDataRepository;
import com.example.microservices.services.MyDataService;
import com.example.microservies.models.MyData;
import com.mongodb.client.result.UpdateResult;


@RestController
@RequestMapping("/yelpdata")
public class MyDataController {
	@Autowired
	private MyDataService myDataService;
	
	@Autowired
	private MyDataRepository myDataRepository;
	
	 @Autowired
	 MongoOperations mongoOperations;
	
	@GetMapping(value = "/elite/{elite}")
    public List<MyData> getStudentByStudentNumber(@PathVariable("elite") String elite) {
		String tagName = "2010";
	    
	    Query query = new Query();
	    query.limit(200);		
	    query.addCriteria(Criteria.where("elite").regex(tagName));
	    
	    return mongoOperations.find(query, MyData.class);		 
		/* Query query = new Query();
        query.addCriteria(Criteria.where("elite").regex(elite));
        return mongoOperations.find(query, MyData.class);
        		//myDataService.findByElite("");*/
	}
	
	@GetMapping(value = "/elite/user")
    public List<MyData> deleteStudentByStudentNumber() {
		//myDataRepository.deleteById();
        return myDataRepository.findByName("Donald");
	}
	
	@PutMapping("/elite/{elite}")
	public UpdateResult updateTutorial(@PathVariable("elite") int elite) {
		/* List<MyData> data = myDataRepository.findByName("Donald");
		for(MyData d:data) {
			d.setReview_count(d.getReview_count()+1);
		}*/
		Query query = new Query();
        query.addCriteria(Criteria.where("name").is("Donald"));
        Update update = new Update();
        
        //update age to 11
        update.set("review", elite);
        
        //remove the createdDate field
        

        // if use updateFirst, it will update 1004 only.
        // mongoOperation.updateFirst(query4, update4, User.class);

        // update all matched, both 1004 and 1005
       

		return mongoOperations.updateMulti(query, update, MyData.class);
	  //Code here
	}
}
