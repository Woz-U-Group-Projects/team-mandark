package com.example.groupproject.controllers;

import java.sql.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.groupproject.models.User;

@Controller
@RequestMapping
public class UsersController {
	public ResultSet getUser(int user_id) throws SQLException {
		return User.getUser(user_id);
	}

	private void deleteUser(int user_id) throws SQLException {
		User.deleteUser(user_id);
	}

	public ResultSet updateUser(int user_id, String username, int user_pin, int num_of_books, boolean overdue_book,
			Array history, boolean is_admin) throws SQLException {
		return User.updateUser(user_id, username, user_pin, num_of_books, overdue_book, history, is_admin);
	}

	public void createUser(int user_id, String username, int user_pin, int num_of_books, boolean overdue_book,
			Array history, boolean is_admin) throws SQLException {
		User.createUser(user_id, username, user_pin, num_of_books, overdue_book, history, is_admin);
	}

}
