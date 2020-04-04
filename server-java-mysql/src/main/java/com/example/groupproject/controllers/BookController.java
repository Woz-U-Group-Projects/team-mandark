package com.example.groupproject.controllers;

import com.example.groupproject.models.Book;
import com.example.groupproject.models.BookRepository;

import java.sql.*;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.groupproject.controllers.ConnectionManager;

@Controller
@RequestMapping(value = "/")
public class BookController {

	public ResultSet getBooks() throws SQLException {
		String bookFilter = "* FROM Mandark.book";
		return Book.getBook(bookFilter);
	}

	public void deleteBook(int book_id) throws SQLException {
		String bookFilter = book_id + " FROM Mandark.book";
		Book.deleteBook(bookFilter);
	}

	public void updateBook(int book_id) throws SQLException {
		String bookFilter = book_id + " FROM Mandark.book";
		Book.updateBook(bookFilter);

	}

	public void addBook(int book_id, String title, String author, String publisher, String description, Date pub,
			Date chk_out_date, boolean chkd_out, int length, String genre, String language) throws SQLException {
		String bookFilter = book_id + author + " FROM Mandark.book";
		Book.updateBook(bookFilter);
	}

}
