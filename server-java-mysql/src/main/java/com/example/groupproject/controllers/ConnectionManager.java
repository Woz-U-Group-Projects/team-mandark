package com.example.groupproject.controllers;

import java.sql.*;

public class ConnectionManager {
	public static Connection getConnection() {
		String url = "database-1.cnabirxcuxic.us-east-1.rds.amazonaws.com";
		String driver = "com.mysql.jdbc.Driver";
		String username = "admin";
		String password = "J8S8NR4sR90nwkZE1pEg";
		System.out.println("-------- MySQL JDBC Connection Demo ------------");
		try {
			Class.forName(driver);
		} catch (ClassNotFoundException e) {
			System.out.println("MySQL JDBC Driver not found !!");
			return null;
		}
		System.out.println("MySQL JDBC Driver Registered!");
		Connection connection = null;
		try {
			connection = DriverManager.getConnection(url, username, password);
			System.out.println("SQL Connection to database established!");

		} catch (SQLException e) {
			System.out.println("Connection Failed! Check output console");
			return null;
		} finally {
			try {
				if (connection != null)
					connection.close();
				System.out.println("Connection closed !!");
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return connection;
	}

}