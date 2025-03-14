package com.springRestAPI.springRestAPI.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springRestAPI.springRestAPI.Login.Response;
import com.springRestAPI.springRestAPI.entities.data;
import com.springRestAPI.springRestAPI.entities.techprimelab;
import com.springRestAPI.springRestAPI.service.TechPrimeLabService;

@RestController
@RequestMapping("/tech")
public class TechPrimeLabController {

	TechPrimeLabService techPrime;

	@Autowired
	public TechPrimeLabController(TechPrimeLabService techPrime) {
		super();
		this.techPrime = techPrime;
	}
	
    //save data API
	@PostMapping("/save")
	@CrossOrigin("*")
	public ResponseEntity<Response> saveEmployee(@RequestBody techprimelab tech){
		return new ResponseEntity<>(techPrime.saveProject(tech), HttpStatus.CREATED);
	}
	
	//get all data API
	@GetMapping("/getAll")
	@CrossOrigin("*")
	public List<techprimelab>getAllProject(
			@RequestParam(value = "pageNumber",defaultValue = "0",required = false) Integer pageNumber,
			@RequestParam(value = "pageSize",defaultValue = "7",required = false) Integer pageSize,
			@RequestParam(value="sortBy",defaultValue = "pid",required = false) String sortBy
			){
		
		    return techPrime.getAllProject(pageNumber,pageSize,sortBy);
	}
	
	//update status API
	@PutMapping("/update")
	@CrossOrigin("*")
	public ResponseEntity<Response> updateProject(@RequestBody data da){
		
		int pid = da.getPid();
		String status = da.getStatus();
		
		return new ResponseEntity<Response>(techPrime.updateProject(pid,status), HttpStatus.OK);
	}
	
	//search on any column API
	 @GetMapping("/searchs")
	 @CrossOrigin("*")
	    public List<techprimelab> searchRecords(
	            @RequestParam(value="keyword",required = false) String keyword,
	            @RequestParam(value = "pageNumber",defaultValue = "0",required = false) Integer page,
	            @RequestParam(value = "pageSize",defaultValue = "7",required = false) Integer size) {
		 
	        //Pageable pageable = PageRequest.of(page, size);
	        
	        return techPrime.searchRecords(keyword, page, size);
	   }
	    
	//total project API 
    @GetMapping("/totalProject")
    @CrossOrigin("*")
    public long countAllProject() {
    	return techPrime.countAllProjects();
    }
    
    //closed project API
    @GetMapping("/closed")
    @CrossOrigin("*")
    public int countClosedProjects() {
        return techPrime.countClosedProjects();
    }
    
    //running project API
    @GetMapping("/running")
    @CrossOrigin("*")
    public int countRunningProjects() {
        return techPrime.countRunningProjects();
    }
    
    //cancel project API
    @GetMapping("/cancel")
    @CrossOrigin("*")
    public int countCancelProjects() {
        return techPrime.countCancelProjects();
    }
    
    //clouser delay API
    @GetMapping("/clouser")
    @CrossOrigin("*")
    public int countRunningProjectsWithEndDateBeforeToday() {
        return techPrime.countRunningProjectsWithEndDateBeforeToday();
    }
    
    //departmentwise project API
    @GetMapping("/departmentwise")
    @CrossOrigin("*")
    public List<Object[]> getDepartmentWiseProjectCounts() {
        return techPrime.countTotalAndClosedProjectsByDepartment();
    }
	
}
