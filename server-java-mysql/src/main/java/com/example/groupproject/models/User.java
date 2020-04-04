package com.example.groupproject.models;

import java.sql.*;

public class User {
	public void getUser(String userFilter) throws SQLException {
		String userQuery = "SELECT" + userFilter;
		UserRepository.findUser(userQuery);
		ResultSet rs = UserRepository.findUser(userQuery);
	}

	public void deleteUser(String userFilter) throws SQLException {
		String userQuery = "DELETE" + userFilter;
		UserRepository.findUser(userQuery);
		ResultSet rs = UserRepository.findUser(userQuery);
	}

	public void updateUser(String userFilter) throws SQLException {
		String userQuery = "INSERT" + userFilter;
		UserRepository.findUser(userQuery);
		ResultSet rs = UserRepository.findUser(userQuery);
	}

	public void createUser(String userFilter) throws SQLException {
		String userQuery = "INSERT" + userFilter;
		ResultSet rs = UserRepository.findUser(userQuery);
	}
}
