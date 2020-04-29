package com.example.groupproject.models;

import java.sql.*;

import com.example.groupproject.controllers.ConnectionManager;

public interface UsersRepository {
	public static ResultSet findUser(String userQuery) throws SQLException {
		Connection con = ConnectionManager.getConnection();
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery(userQuery);
		return rs;
	}
}
