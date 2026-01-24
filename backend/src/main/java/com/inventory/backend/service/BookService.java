package com.inventory.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inventory.backend.model.Book;
import com.inventory.backend.repository.BookRepository;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;

    public List<Book> getAllBooks(){
        return repository.findAll();
    }
    public Book getBookById(int id){
        return repository.findById(id).orElseThrow();
    }
    public Book saveBook(Book book){
        return repository.save(book);
    }
    // public Book updateBook(int id,Book book){
        // book.setId(id);
        // return repository.save(book);
    // }
    // public void deleteBook(int id){
        // repository.deleteById(id);
    // }
}
