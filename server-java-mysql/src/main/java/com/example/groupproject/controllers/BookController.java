package com.example.groupproject.controllers;

import com.example.groupproject.models.Book;
import com.example.groupproject.models.BookRepository;
import com.example.groupproject.models.Search;

import java.sql.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.groupproject.controllers.ConnectionManager;

@Controller
@RequestMapping(value = "/")
public class BookController {

	public ResultSet bookSearch(String bookFilter) throws SQLException {
		return Search.byGenre(bookFilter);
	}

	public ResultSet getBooks() throws SQLException {
		return Book.getBooks();
	}

	public void deleteBook(int book_id) throws SQLException {
		Book.deleteBook(book_id);
	}

	public void updateBook(int book_id, String title, String author, String publisher, String description,
			Date pub_date, Date chk_out_date, boolean chkd_out, String length, String genre, String language)
			throws SQLException {
		Book.updateBook(book_id, title, author, publisher, description, pub_date, chk_out_date, chkd_out, length, genre,
				language);
	}

	public void addBook(int book_id, String title, String author, String publisher, String description, Date pub_date,
			Date chk_out_date, boolean chkd_out, String length, String genre, String language) throws SQLException {
		Book.addBook(book_id, title, author, publisher, description, pub_date, chk_out_date, chkd_out, length, genre,
				language);
	}
}
