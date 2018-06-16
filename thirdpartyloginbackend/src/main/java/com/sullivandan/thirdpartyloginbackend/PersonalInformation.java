package com.sullivandan.thirdpartyloginbackend;

import org.springframework.context.annotation.Bean;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

@Component
@Document(collection = "users")
public class PersonalInformation {

    @Id
    private String id;
    private String name;
    private String email;

//    public PersonalInformation(String name, String email){
//        this.name = name;
//        this.email = email;
//    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
