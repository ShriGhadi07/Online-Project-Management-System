package com.springRestAPI.springRestAPI.service.impl;


import java.util.List;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.springRestAPI.springRestAPI.Login.Response;
import com.springRestAPI.springRestAPI.entities.techprimelab;
import com.springRestAPI.springRestAPI.exception.ResourceNotFoundException;
import com.springRestAPI.springRestAPI.repository.TechPrimeLabRepository;
import com.springRestAPI.springRestAPI.service.TechPrimeLabService;


@Service
@Transactional
public class TechPrimeLabServiceImpl implements TechPrimeLabService {

	TechPrimeLabRepository techPrimeLabRepository;
	
	@Autowired
	public TechPrimeLabServiceImpl(TechPrimeLabRepository techPrimeLabRepository) {
		super();
		this.techPrimeLabRepository = techPrimeLabRepository;
	}
	
	public TechPrimeLabRepository getTechPrimeLabRepository() {
		return techPrimeLabRepository;
	}

	public void setTechPrimeLabRepository(TechPrimeLabRepository techPrimeLabRepository) {
		this.techPrimeLabRepository = techPrimeLabRepository;
	}



	//save project
	@Override
	public Response saveProject(techprimelab tech) {
		
         techPrimeLabRepository.save(tech);
        
		Response re = new Response();
		re.setSuccess(true);
		re.setMessage("New project added succefully");
		
		return re;
		
	}

	//get all project
	@Override
	public List<techprimelab> getAllProject(Integer pageNumber,Integer pageSize ,String sortBy) {
		
		String sortByPID = sortBy;
		
		Pageable p = null;
		if(sortByPID.equals("pid"))
		{
	     	p = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy).descending());
		}else
		{
			p = PageRequest.of(pageNumber, pageSize, Sort.by(sortBy).ascending()); 
		}
		
		Page<techprimelab> pageTech = this.techPrimeLabRepository.findAll(p);
		
		return pageTech.getContent(); 
		
	}

	//update status
	@Override
	public Response updateProject(int pid, String status) {
		// TODO Auto-generated method stub
		
		techprimelab existTech = techPrimeLabRepository.findById(pid).orElseThrow(
				()-> new ResourceNotFoundException("emp1", "emp_id", pid));
		
		
		existTech.setStatus(status);
		
		techPrimeLabRepository.save(existTech);
		
		Response re = new Response();
		re.setSuccess(true);
		re.setMessage("Status Update Succefully");
		
		return re;
		
	}
	
	@Override
	public Response deleteProject(int pid) {
		// TODO Auto-generated method stub
		
		techprimelab existTech = techPrimeLabRepository.findById(pid).orElseThrow(
				()-> new ResourceNotFoundException("emp1", "emp_id", pid));
		
		
		//existTech.setStatus(status);
		
		techPrimeLabRepository.save(existTech);
		
		Response re = new Response();
		re.setSuccess(true);
		re.setMessage("Status Update Succefully");
		
		return re;
		
	}
	
	//search record on every column
	@Override
	public List<techprimelab> searchRecords(String searchText, Integer pageNumber,Integer pageSize) {
		// TODO Auto-generated method stub
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		
		Page<techprimelab> pageTech = this.techPrimeLabRepository.searchProject(searchText,pageable);
		
		
		return pageTech.getContent();
	}
	
	//total project
	@Override
	public long countAllProjects() {
		// TODO Auto-generated method stub
		return techPrimeLabRepository.count();
	}
	
	//closed project
		@Override
		public int countClosedProjects() {
	        String closedStatus = "Closed";
	        return techPrimeLabRepository.countByStatus(closedStatus);
	    }
	
	//running project
	@Override
	public int countRunningProjects() {
		// TODO Auto-generated method stub
		 String runningStatus = "Running";
		return techPrimeLabRepository.countByStatus(runningStatus);
	}
	
	//cancel project
	@Override
	public int countCancelProjects() {
		// TODO Auto-generated method stub
		 String cancelStatus = "Cancelled";
		return techPrimeLabRepository.countByStatus(cancelStatus);
	}
	
	//total project by department
	@Override
	public List<Object[]> countTotalAndClosedProjectsByDepartment() {
		// TODO Auto-generated method stub
		return techPrimeLabRepository.countTotalAndClosedProjectsByDepartment();
	}
	
	//clouser delay
	@Override
	public int countRunningProjectsWithEndDateBeforeToday() {
		// TODO Auto-generated method stub
		return techPrimeLabRepository.countRunningProjectsWithEndDateBeforeToday();
	}




}
