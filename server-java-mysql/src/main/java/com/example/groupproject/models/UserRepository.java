package com.example.groupproject.models;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.example.groupproject.controllers.ConnectionManager;

public interface UserRepository {
	public static ResultSet findUser(String userQuery) throws SQLException {
		Connection con = ConnectionManager.getConnection();
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery(userQuery);
		return rs;
	}
}
