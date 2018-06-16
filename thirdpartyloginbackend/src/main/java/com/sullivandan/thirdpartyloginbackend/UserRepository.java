package com.sullivandan.thirdpartyloginbackend;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<PersonalInformation, String> {
    public PersonalInformation findByName(String name);
    public List<PersonalInformation> findByEmail(String email);
}
