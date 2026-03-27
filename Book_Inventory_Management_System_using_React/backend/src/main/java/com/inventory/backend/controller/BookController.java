package com.inventory.backend.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

import com.inventory.backend.model.Book;
import com.inventory.backend.service.BookService;

import jakarta.validation.Valid;
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("/api/books")
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping
    public List<Book> getAllBooks(){
        return service.getAllBooks();
    }
    @GetMapping("/dashboard")
    public Map<String, Long> getDashboard() {
        Map<String, Long> data = new HashMap<>();
        data.put("total", service.getTotalBooks());
        data.put("lowStock", service.getLowStock());
        data.put("outOfStock", service.getOutOfStock());
        return data;
    }
    @GetMapping("/{id}")
    public Book getBook(@PathVariable int id){
        return service.getBookById(id);
    }
    @PostMapping
    public Book addBook(@Valid @RequestBody Book book){
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
