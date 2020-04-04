package com.example.groupproject.models;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.example.groupproject.models.BookRepository;
import com.example.groupproject.controllers.ConnectionManager;

public interface BookRepository {
	public static ResultSet findBook(String bookQuery) throws SQLException {
		Connection con = ConnectionManager.getConnection();
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery(bookQuery);
		return rs;
	}
}
	


