package com.example.groupproject.models;

import java.sql.*;

public class Book{
public static ResultSet getBook(String bookFilter) throws SQLException {
	String bookQuery = "SELECT" + bookFilter;
	return BookRepository.findBook(bookQuery);
	
}

public ResultSet deleteBook(String bookFilter) throws SQLException {
	String bookQuery = "DELETE" + bookFilter;
	return BookRepository.findBook(bookQuery);
}

public ResultSet updateBook(String bookFilter) throws SQLException {
	String bookQuery = "INSERT" + bookFilter;
	return BookRepository.findBook(bookQuery);
}

public ResultSet createBook(String bookFilter) throws SQLException {
	String bookQuery = "INSERT" + bookFilter;
	return BookRepository.findBook(bookQuery);
}
}
