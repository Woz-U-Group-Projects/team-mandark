package com.example.groupproject.models;

import java.sql.*;


public class Search {
	public ResultSet byBookId(int book_id) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE book_id IS = " + book_id;
		return BookRepository.makeQuery(bookQuery);
	}

	public ResultSet byTitle(String title) throws SQLException {
		String bookQuery = "* FROM Mandark.book WHERE book_id IS = " + title;
		return BookRepository.makeQuery(bookQuery);
	}

	public ResultSet byAuthor(String author) throws SQLException {
		String bookQuery = "* FROM Mandark.book WHERE book_id IS = " + author;
		return BookRepository.makeQuery(bookQuery);
	}

	public ResultSet byPublisher(String publisher) throws SQLException {
		String bookQuery = "* FROM Mandark.book WHERE book_id IS = " + publisher;
		return BookRepository.makeQuery(bookQuery);
	}

	public ResultSet byPubDate(Date pub_date) throws SQLException {
		String bookQuery = "* FROM Mandark.book WHERE book_id IS = " + pub_date;
		return BookRepository.makeQuery(bookQuery);
	}

	public ResultSet byChkdOut(boolean chkd_out) throws SQLException {
		String bookQuery = "* FROM Mandark.book WHERE book_id IS = " + chkd_out;
		return BookRepository.makeQuery(bookQuery);
	}
	
	public ResultSet byChkdOut(Date chk_out_date) throws SQLException {
		String bookQuery = "* FROM Mandark.book WHERE book_id IS = " + chk_out_date;
		return BookRepository.makeQuery(bookQuery);
	}

	public ResultSet byLength(int length) throws SQLException {
		String bookQuery = "* FROM Mandark.book WHERE book_id IS = " + length;
		return BookRepository.makeQuery(bookQuery);
	}

	public static ResultSet byGenre(String genre) throws SQLException {
		String bookQuery = "SELECT * FROM Mandark.book WHERE genre IS = " + genre;
		return BookRepository.makeQuery(bookQuery);
	}

	public ResultSet byLanguage(String language) throws SQLException {
		String bookQuery = "* FROM Mandark.book WHERE book_id IS = " + language;
		return BookRepository.makeQuery(bookQuery);
	}
}
