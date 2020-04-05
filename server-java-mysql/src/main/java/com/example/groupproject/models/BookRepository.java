package com.example.groupproject.models;
import java.sql.*;


import com.example.groupproject.models.BookRepository;
import com.example.groupproject.controllers.ConnectionManager;

public interface BookRepository {
	public static ResultSet makeQuery(String bookQuery) throws SQLException {
		Connection con = ConnectionManager.getConnection();
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery(bookQuery);
		return rs;
	}
}
