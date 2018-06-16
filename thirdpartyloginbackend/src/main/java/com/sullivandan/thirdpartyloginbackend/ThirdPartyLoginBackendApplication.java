package com.sullivandan.thirdpartyloginbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@ComponentScan({"com.sullivandan.thirdpartyloginbackend"})
@EnableMongoRepositories("com.sullivandan.thirdpartyloginbackend") //to activate MongoDB repositories
public class ThirdPartyLoginBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThirdPartyLoginBackendApplication.class, args);
	}


}
