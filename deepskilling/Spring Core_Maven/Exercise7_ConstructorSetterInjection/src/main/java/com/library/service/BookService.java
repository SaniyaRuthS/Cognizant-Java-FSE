package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private String libraryName;
    private BookRepository bookRepository;

    // Constructor Injection
    public BookService(String libraryName) {
        this.libraryName = libraryName;
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayService() {
        System.out.println("Library Name: " + libraryName);
        bookRepository.displayRepository();
    }
}
