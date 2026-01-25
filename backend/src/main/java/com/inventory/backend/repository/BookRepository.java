package com.inventory.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventory.backend.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{

}
