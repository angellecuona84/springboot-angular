package com.repository;

import com.domain.Film;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Angel Luis on 8/18/2015.
 */
public interface FilmRepository extends CrudRepository<Film,Integer> {
}
