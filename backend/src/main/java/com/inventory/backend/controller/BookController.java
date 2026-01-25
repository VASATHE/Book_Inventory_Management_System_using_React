package com.inventory.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inventory.backend.model.Book;
import com.inventory.backend.service.BookService;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
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
    @PutMapping("/{id}")
    public Book updateBook(@PathVariable int id,@RequestBody Book book){
        return service.updateBook(id,book);
    }
    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable int id){
        service.deleteBook(id);
    }
}
