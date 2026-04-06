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

    public List<Book> getAllBooks() {
        return repository.findAll();
    }

    public Book getBookById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));
    }

    public Book saveBook(Book book) {
        return repository.save(book);
    }

    public Book updateBook(int id, Book book) {
        Book existing = getBookById(id);

        existing.setTitle(book.getTitle());
        existing.setAuthor(book.getAuthor());
        existing.setDescription(book.getDescription());
        existing.setQuantity(book.getQuantity());

        return repository.save(existing);
    }

    public void deleteBook(int id) {
        repository.deleteById(id);
    }

    public long getTotalBooks() {
        return repository.count();
    }

    public long getOutOfStock() {
        return repository.countByQuantity(0);
    }

    public long getLowStock() {
        return repository.countByQuantityLessThanEqualAndQuantityGreaterThan(5, 0);
    }
}
