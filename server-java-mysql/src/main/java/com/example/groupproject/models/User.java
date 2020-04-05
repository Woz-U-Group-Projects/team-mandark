package com.example.groupproject.models;

import java.sql.*;

public class User {
	public static ResultSet getUsers(String userFilter) throws SQLException {
		String userQuery = "SELECT" + userFilter;
		return UserRepository.findUser(userQuery);

	}

	public static void deleteUser(String userFilter) throws SQLException {
		String userQuery = "DELETE" + userFilter;
		UserRepository.findUser(userQuery);

	}

	public static ResultSet updateUser(String userFilter) throws SQLException {
		String userQuery = "INSERT" + userFilter;
		return UserRepository.findUser(userQuery);

	}

	public static void createUser(String userFilter) throws SQLException {
		String userQuery = "INSERT" + userFilter;
		UserRepository.findUser(userQuery);
	}
}
