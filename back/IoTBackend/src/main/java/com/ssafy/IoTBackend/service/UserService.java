package com.ssafy.IoTBackend.service;

import com.ssafy.IoTBackend.model.User;

public interface UserService {
	
	public int insertUser(User dto) throws Exception;
	public User selectUser(String user_id) throws Exception;
	public int updateUser(User dto) throws Exception;
	public int updateUserPot(User dto) throws Exception;
}
