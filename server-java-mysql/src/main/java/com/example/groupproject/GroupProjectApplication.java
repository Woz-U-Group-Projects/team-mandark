package com.example.groupproject;

import java.sql.SQLException;
import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.groupproject.models.Search;

@SpringBootApplication
public class GroupProjectApplication {
	public static void main(String[] args) throws SQLException {
//		Main Menu for selecting a database
		int swValue;
		System.out.println("|     SELECT DATABASE      |");
		System.out.println("| Options:                 |");
		System.out.println("|        1. Book           |");
		System.out.println("|        2. User           |");
		System.out.println("|        3. Exit           |");
		swValue = Keyin.inInt(" Select option: ");

		// Switch construct
		switch (swValue) {
//		Menu for the book database
		case 1:
			System.out.println("Book database selected");
			System.out.println("|      SELECT OPTION       |");
			System.out.println("| Options:                 |");
			System.out.println("|        1. Read           |");
			System.out.println("|        2. Add            |");
			System.out.println("|        3. Update         |");
			System.out.println("|        3. Delete         |");
			swValue = Keyin.inInt(" Select option: ");
			switch (swValue) {
			case 1:
				int book_id = Keyin.inInt("Search an ID: ");
				Search.byBookId(book_id);
				break;
			case 2:
				
				break;
			case 3:
				break;
			case 4:
				break;
			default:
				System.out.println("Invalid seleciton");
				break;
			}
			break;
//			Menu for the user database
		case 2:
			System.out.println("User database selection selected");
			break;
//			Stops running the java app.
		case 3:
			System.out.println("Exit selected");
			System.exit(0);
			break;
//			Detects an invalid input.
		default:
			System.out.println("Invalid selection");
			break; // This break is not really necessary
		}
	}
}

class Keyin {

	// *******************************
	// support methods
	// *******************************
	// Method to display the user's prompt string
	public static void printPrompt(String prompt) {
		System.out.print(prompt + " ");
		System.out.flush();
	}

	// Method to make sure no data is available in the
	// input stream
	public static void inputFlush() {
		int dummy;
		int bAvail;

		try {
			while ((System.in.available()) != 0)
				dummy = System.in.read();
		} catch (java.io.IOException e) {
			System.out.println("Input error");
		}
	}

	public static String inString() {
		int aChar;
		String s = "";
		boolean finished = false;

		while (!finished) {
			try {
				aChar = System.in.read();
				if (aChar < 0 || (char) aChar == '\n')
					finished = true;
				else if ((char) aChar != '\r')
					s = s + (char) aChar; // Enter into string
			}

			catch (java.io.IOException e) {
				System.out.println("Input error");
				finished = true;
			}
		}
		return s;
	}

	public static int inInt(String prompt) {
		while (true) {
			inputFlush();
			printPrompt(prompt);
			try {
				return Integer.valueOf(inString().trim()).intValue();
			}

			catch (NumberFormatException e) {
				System.out.println("Invalid input. Not an integer");
			}
		}
	}

}
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Please select the database you wish to access:");
//		System.out.println("At any time type exit to 0.");
//		System.out.println("1. Books");
//		System.out.println("2. Users");
//		int choice = scanner.nextInt();
//	}}
////		TODO: Change over console menu into a while loop and use a switch statement for the menu.
//		
//		
//		
//		
////		boolean isRunning = true;
////		
////		if (isRunning = true) {
////			Scanner scanner = new Scanner(System.in);
////			System.out.println("Please select the database you wish to access:");
////			System.out.println("At any time type exit to 0.");
////			System.out.println("1. Books");
////			System.out.println("2. Users");
////			 MySqlTable = scanner.nextInt();
////
////			if (MySqlTable == 1) {
////				System.out.println("Book table selected.");
////				System.out.println("--------------------");
////				System.out.println("Please select the action you would like to do:");
////				System.out.println("--------------------");
////				System.out.println("1. Search");
////				System.out.println("2. Get All");
////				System.out.println("3. Add");
////				System.out.println("4. Update");
////				System.out.println("5. Delete");
////				 MySqlAction = scanner.nextInt();
////				if (MySqlAction == 1) {
////					System.out.println("Called 1");
//////					Searching in this if statement
////				} else if (MySqlAction == 2) {
////					System.out.println("Called 2");
//////					Getting all books
////				} else if (MySqlAction == 3) {
////					System.out.println("Called 3");
//////					Add a new book
////				} else if (MySqlAction == 4) {
////					System.out.println("Called 4");
//////					Update a book
////				} else if (MySqlAction == 5) {
////					System.out.println("Called 5");
//////					delete a book
////				} else {
////					System.out.println("Input not valid. Please enter a number for your selected action.");
////				}
////			} else if (MySqlTable == 2) {
////				System.out.println("User table selected.");
////				System.out.println("--------------------");
////				System.out.println("Please select the action you would like to do:");
////				System.out.println("--------------------");
////				System.out.println("1. Get All");
////				System.out.println("2. Add");
////				System.out.println("3. Update");
////				System.out.println("4. Delete");
////			} else if (MySqlTable == 0 ){
////				scanner.close();
////			} else {
////				System.out.println("Input not valid. Please enter a number for your selected action.");
////				inputScanner();
////			}
////			
////		} else {
////			System.exit(0);
////		}
////		
////	}
