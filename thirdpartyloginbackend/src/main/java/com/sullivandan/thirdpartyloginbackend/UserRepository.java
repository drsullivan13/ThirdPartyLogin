package com.sullivandan.thirdpartyloginbackend;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<PersonalInformation, String> {
    public PersonalInformation findByFirstName(String firstName);
    public List<PersonalInformation> findByLastName(String lastName);
}
