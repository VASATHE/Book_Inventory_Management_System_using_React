package com.inventory.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.inventory.backend.model.Book;
import com.inventory.backend.service.BookService;

public class BookController {

    private BookService service;

    @GetMapping
    public List<Book> getAllBooks(){
        return service.getAllBooks();
    }
    @GetMapping("/{id}")
    public Book getBook(@PathVariable int id){
        return service.getBookById(id);
    }
    @PostMapping
    public Book addBook(@RequestBody Book book){
        return service.saveBook(book);
    }
}
