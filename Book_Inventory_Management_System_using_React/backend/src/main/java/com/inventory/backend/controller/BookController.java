package com.inventory.backend.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.inventory.backend.model.Book;
import com.inventory.backend.service.BookService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping
    public List<Book> getAllBooks() {
        return service.getAllBooks();
    }

    @GetMapping("/dashboard")
    public Map<String, Long> getDashboard() {
        Map<String, Long> map = new HashMap<>();
        map.put("total", service.getTotalBooks());
        map.put("lowStock", service.getLowStock());
        map.put("outOfStock", service.getOutOfStock());
        return map;
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable int id) {
        return service.getBookById(id);
    }

    @PostMapping
    public Book addBook(@Valid @RequestBody Book book) {
        return service.saveBook(book);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable int id, @RequestBody Book book) {
        return service.updateBook(id, book);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable int id) {
        service.deleteBook(id);
    }
}
