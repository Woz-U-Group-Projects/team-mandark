package com.example.groupproject;

import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class GroupProjectApplication {

	public static void main(String[] args) {
		boolean isRunning = true;
		
		if (isRunning = true) {
			Scanner scanner = new Scanner(System.in);
			System.out.println("Please select the database you wish to access:");
			System.out.println("At any time type exit to 0.");
			System.out.println("1. Books");
			System.out.println("2. Users");
			int MySqlTable = scanner.nextInt();

			if (MySqlTable == 1) {
				System.out.println("Book table selected.");
				System.out.println("--------------------");
				System.out.println("Please select the action you would like to do:");
				System.out.println("--------------------");
				System.out.println("1. Search");
				System.out.println("2. Get All");
				System.out.println("3. Add");
				System.out.println("4. Update");
				System.out.println("5. Delete");
				int MySqlAction = scanner.nextInt();
				if (MySqlAction == 1) {
					System.out.println("Called 1");
//					Searching in this if statement
				} else if (MySqlAction == 2) {
					System.out.println("Called 2");
//					Getting all books
				} else if (MySqlAction == 3) {
					System.out.println("Called 3");
//					Add a new book
				} else if (MySqlAction == 4) {
					System.out.println("Called 4");
//					Update a book
				} else if (MySqlAction == 5) {
					System.out.println("Called 5");
//					delete a book
				} else {
					System.out.println("Input not valid. Please enter a number for your selected action.");
				}
			} else if (MySqlTable == 2) {
				System.out.println("User table selected.");
				System.out.println("--------------------");
				System.out.println("Please select the action you would like to do:");
				System.out.println("--------------------");
				System.out.println("1. Get All");
				System.out.println("2. Add");
				System.out.println("3. Update");
				System.out.println("4. Delete");
			} else if (MySqlTable == 0 ){
				scanner.close();
			} else {
				System.out.println("Input not valid. Please enter a number for your selected action.");
				inputScanner();
			}
			
		} else {
			System.exit(0);
		}
		
	}
	
	
	public static void inputScanner() {
		Scanner scanner = new Scanner(System.in);
	}
	
	
	
	
	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:3000","http://localhost:4200");
            }
        };
    }

}
