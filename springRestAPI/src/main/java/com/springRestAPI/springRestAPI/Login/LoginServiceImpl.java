package com.springRestAPI.springRestAPI.Login;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;


@Transactional
@Service
public class LoginServiceImpl implements LoginService {

	//private static final int ResponseEntity = 0;
	private LoginRepository repo;

	public LoginServiceImpl(LoginRepository repo) {
		super();
		this.repo = repo;
	}

	@Override
	public Response userLogin(login log) {
		// TODO Auto-generated method stub
		String email = log.getEmail();
		String password = log.getPassword();
		//System.out.println("hiii"+email+""+password);
		
		//Checking user exit or not
		login log1 = repo.findByEmailAndPassword(email, password);
		
		//if exit
		if(log1!=null)
		{
			Response re = new Response();
			re.setSuccess(true);
			re.setMessage("Valid user");
			return re;
		}
		else
		{
			Response re = new Response();
			re.setSuccess(false);
			re.setMessage("Invalid user");
			return re;
		}
	}
		


	@Override
	public login saveUser(login log) {
		
		return repo.save(log);
	}

	
	
	

}
