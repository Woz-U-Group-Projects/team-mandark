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
		String bookFilter = "FROM Mandark.book WHERE book_id ="+book_id;
		Book.deleteBook(bookFilter);
	}

	public void updateBook(int book_id, String title, String author, String publisher, Date pub_date, String length,
			String genre, String language) throws SQLException {
		String bookFilter = "UPDATE Mandark.book SET book_id ='" + book_id + "', title='" + title + "', author='"
				+ author + "', publisher='" + publisher + "', description='" + "', pub_date='" + pub_date
				+ "', chk_out_date='null', chkd_out='false', length='" + length + "', genre='" + genre + "', language='"
				+ language + "' WHERE book_id=" + book_id + ";";
		Book.updateBook(bookFilter);

	}

	public void addBook(int book_id, String title, String author, String publisher, String description, Date pub_date,
			Date chk_out_date, boolean chkd_out, int length, String genre, String language) throws SQLException {
		String bookFilter = "INTO Mandark.book (book_id, title, author, publisher, description, pub_date, chk_out_date, chkd_out, length, genre, language) VALUES ('"
				+ book_id + "','" + title + "','" + author + "','" + publisher + "','" + description + "','" + pub_date
				+ "','" + chk_out_date + "','" + chkd_out + "','" + length + "','" + genre + "','" + language + "');";
		Book.createBook(bookFilter);
	}

}
