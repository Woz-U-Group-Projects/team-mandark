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
	
	public getBooks() {
		public findAll() {
			
		}
		
		public withFilter() 
	}
	
	@RequestMapping(value = "/books")
	public ResultSet getBooks() throws SQLException {
		String bookFilter = "* FROM Mandark.book";
	return Book.getBook(bookFilter);
	
		
	}
	
	public getBook
}
