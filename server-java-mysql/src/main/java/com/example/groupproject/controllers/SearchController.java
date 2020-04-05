package com.example.groupproject.controllers;

import com.example.groupproject.models.Search;

import java.sql.*;

public class SearchController {

	public ResultSet byBookId(int book_id) throws SQLException {
		return Search.byBookId(book_id);
	}

	public ResultSet byTitle(String title) throws SQLException {
		return Search.byTitle(title);
	}

	public ResultSet byAuthor(String author) throws SQLException {
		return Search.byAuthor(author);
	}

	public ResultSet byPublisher(String publisher) throws SQLException {
		return Search.byPublisher(publisher);
	}

	public ResultSet byPubDate(Date pub_date) throws SQLException {
		return Search.byPubDate(pub_date);
	}

	public ResultSet byChkdOut(boolean chkd_out) throws SQLException {
		return Search.byChkdOut(chkd_out);
	}

	public ResultSet byChkOutDt(Date chk_out_date) throws SQLException {
		return Search.byChkOutDt(chk_out_date);
	}

	public ResultSet byLength(int length) throws SQLException {
		return Search.byLength(length);
	}

	public static ResultSet byGenre(String genre) throws SQLException {
		return Search.byGenre(genre);
	}

	public ResultSet byLanguage(String language) throws SQLException {
		return Search.byLanguage(language);
	}
}
