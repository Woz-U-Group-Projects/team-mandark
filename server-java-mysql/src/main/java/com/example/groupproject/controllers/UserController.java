package com.example.groupproject.controllers;

import java.sql.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.groupproject.controllers.ConnectionManager;
import com.example.groupproject.models.User;

@Controller
@RequestMapping
public class UserController {
	public ResultSet getUser(int user_id) {
		String userFilter = "* FROM Mandark.user";
		return User.getUsers(userFilter);
	}

	private void deleteUser(int user_id) {
		String userFilter = user_id + " FROM Mandark.user";
		User.deleteUser(userFilter);
	}

	public void updateUser(int user_id) {
		String userFilter = user_id + "F"
	}

	public void addUser()

}
