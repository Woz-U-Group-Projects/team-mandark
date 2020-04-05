package com.example.groupproject.models;

import java.sql.*;

public class Search {
	public static ResultSet byBookId(int book_id) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE book_id IS = " + book_id;
		return BookRepository.makeQuery(bookQuery);
	}

	public static ResultSet byTitle(String title) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE title IS = " + title;
		return BookRepository.makeQuery(bookQuery);
	}

	public static ResultSet byAuthor(String author) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE author IS = " + author;
		return BookRepository.makeQuery(bookQuery);
	}

	public static ResultSet byPublisher(String publisher) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE publisher IS = " + publisher;
		return BookRepository.makeQuery(bookQuery);
	}

	public static ResultSet byPubDate(Date pub_date) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE pub_date IS = " + pub_date;
		return BookRepository.makeQuery(bookQuery);
	}

	public static ResultSet byChkdOut(boolean chkd_out) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE chkd_out IS = " + chkd_out;
		return BookRepository.makeQuery(bookQuery);
	}

	public static ResultSet byChkOutDt(Date chk_out_date) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE chk_out_date IS = " + chk_out_date;
		return BookRepository.makeQuery(bookQuery);
	}

	public static ResultSet byLength(int length) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE length IS = " + length;
		return BookRepository.makeQuery(bookQuery);
	}

	public static ResultSet byGenre(String genre) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE genre IS = " + genre;
		return BookRepository.makeQuery(bookQuery);
	}

	public static ResultSet byLanguage(String language) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE language IS = " + language;
		return BookRepository.makeQuery(bookQuery);
	}
}
