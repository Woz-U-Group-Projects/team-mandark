package com.example.groupproject.controllers;

import java.sql.*;

import com.example.groupproject.models.Book;

public class SearchController {
	public static ResultSet byBookId(int book_id) throws SQLException {
		String bookFilter = "* FROM Mandark.book WHERE book_id IS = " + book_id;
		return Book.getBook(bookFilter);
	}

	public ResultSet byTitle(String title) throws SQLException {
		String bookFilter = "* FROM Mandark.book WHERE book_id IS = " + title;
		return Book.getBook(bookFilter);
	}

	public ResultSet byAuthor(String author) throws SQLException {
		String bookFilter = "* FROM Mandark.book WHERE book_id IS = " + author;
		return Book.getBook(bookFilter);
	}

	public ResultSet byPublisher(String publisher) throws SQLException {
		String bookFilter = "* FROM Mandark.book WHERE book_id IS = " + publisher;
		return Book.getBook(bookFilter);
	}

	public ResultSet byPubDate(Date pub_date) throws SQLException {
		String bookFilter = "* FROM Mandark.book WHERE book_id IS = " + pub_date;
		return Book.getBook(bookFilter);
	}

	public ResultSet byChkdOut(boolean chkd_out) throws SQLException {
		String bookFilter = "* FROM Mandark.book WHERE book_id IS = " + chkd_out;
		return Book.getBook(bookFilter);
	}
	
	public ResultSet byChkdOut(Date chk_out_date) throws SQLException {
		String bookFilter = "* FROM Mandark.book WHERE book_id IS = " + chk_out_date;
		return Book.getBook(bookFilter);
	}

	public ResultSet byLength(int length) throws SQLException {
		String bookFilter = "* FROM Mandark.book WHERE book_id IS = " + length;
		return Book.getBook(bookFilter);
	}

	public ResultSet byGenre(String genre) throws SQLException {
		String bookFilter = "* FROM Mandark.book WHERE book_id IS = " + genre;
		return Book.getBook(bookFilter);
	}

	public ResultSet byLanguage(String language) throws SQLException {
		String bookFilter = "* FROM Mandark.book WHERE book_id IS = " + language;
		return Book.getBook(bookFilter);
	}
}
