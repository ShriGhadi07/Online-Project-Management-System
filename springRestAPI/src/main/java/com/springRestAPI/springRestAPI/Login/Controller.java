package com.springRestAPI.springRestAPI.Login;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/c1")
public class Controller {

	private LoginServiceImpl logServiceImpl;

	public Controller(LoginServiceImpl logServiceImpl) {
		super();
		this.logServiceImpl = logServiceImpl;
	}
	
	
	//create user rest api
	@PostMapping("/user")
	@CrossOrigin("*")
	public ResponseEntity<login> saveUser(@RequestBody login log){
		return new ResponseEntity<login>(logServiceImpl.saveUser(log), HttpStatus.OK);
	}
	
	//create login rest api
	@PostMapping("/login")
	@CrossOrigin("*")
	public Response userLogin(@RequestBody login log){
		
		//return new ResponseEntity<>(logServiceImpl.userLogin(log), HttpStatus.OK);
		return logServiceImpl.userLogin(log);
	}
	
}
