package com.example.groupproject.models;

import java.sql.*;

public class User {
	public static ResultSet getUser(int user_id) throws SQLException {
		String userQuery = "SELECT * FROM Mandark.user WHERE user_id=" + user_id;
		return UserRepository.findUser(userQuery);

	}

	public static void deleteUser(int user_id) throws SQLException {
		String userQuery = "DELETE FROM Mandark.user WHERE user_id=" + user_id;
		UserRepository.findUser(userQuery);

	}

	public static ResultSet updateUser(int user_id, String username, int user_pin, int num_of_books,
			boolean overdue_book, Array history, boolean is_admin) throws SQLException {
		String userQuery = "UPDATE Mandark.user SET user_id='" + user_id + "', username='" + username + "', user_pin='"
				+ user_pin + "', num_of_books='" + num_of_books + "', overdue_book='" + overdue_book + "', history='"
				+ history + "', is_admin='" + is_admin + "' WHERE user_id=" + user_id + ";";
		return UserRepository.findUser(userQuery);

	}

	public static void createUser(int user_id, String username, int user_pin, int num_of_books, boolean overdue_book,
			Array history, boolean is_admin) throws SQLException {
		String userQuery = "INSERT INTO Mandark.user (user_id, username, user_pin, num_of_books, overdue_book, history, is_admin) VALUES ('"
				+ user_id + "','" + username + "','" + user_pin + "','" + num_of_books + "','" + overdue_book + "','" + history
				+ "','" + is_admin + "');";
		UserRepository.findUser(userQuery);
	}
}
