package com.inventory.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inventory.backend.model.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{

}
