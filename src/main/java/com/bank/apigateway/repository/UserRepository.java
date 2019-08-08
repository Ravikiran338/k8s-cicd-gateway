package com.bank.apigateway.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import com.bank.apigateway.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	public User findByUsername(String username) throws UsernameNotFoundException;
}
