package com.example.groupproject.models;

import java.sql.*;

//This is the Book service. It will take in a bookFilter from the book controller and use that to create the bookQuery. 
//The findBook method is then called on from the BookRepository and we use our new bookQuery as the parameter.
public class Book {
	public ResultSet getBooks() throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book";
		return BookRepository.makeQuery(bookQuery);
	}

	public void deleteBook(int book_id) throws SQLException {
		String bookQuery = "FROM Mandark.book WHERE book_id ="+book_id;
		BookRepository.makeQuery(bookQuery);
	}

	public void updateBook(int book_id, String title, String author, String publisher, Date pub_date, String length,
			String genre, String language) throws SQLException {
		String bookQuery = "UPDATE Mandark.book SET book_id ='" + book_id + "', title='" + title + "', author='"
				+ author + "', publisher='" + publisher + "', description='" + "', pub_date='" + pub_date
				+ "', chk_out_date='null', chkd_out='false', length='" + length + "', genre='" + genre + "', language='"
				+ language + "' WHERE book_id=" + book_id + ";";
		BookRepository.makeQuery(bookQuery);

	}

	public void addBook(int book_id, String title, String author, String publisher, String description, Date pub_date,
			Date chk_out_date, boolean chkd_out, int length, String genre, String language) throws SQLException {
		String bookQuery = "INTO Mandark.book (book_id, title, author, publisher, description, pub_date, chk_out_date, chkd_out, length, genre, language) VALUES ('"
				+ book_id + "','" + title + "','" + author + "','" + publisher + "','" + description + "','" + pub_date
				+ "','" + chk_out_date + "','" + chkd_out + "','" + length + "','" + genre + "','" + language + "');";
		BookRepository.makeQuery(bookQuery);
	}

}
