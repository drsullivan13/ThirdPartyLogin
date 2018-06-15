package com.sullivandan.thirdpartyloginbackend;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.json.*;

import java.util.HashMap;
import java.util.Map;

@Controller
public class ThirdPartyLoginBackendController {


    private final Log log = LogFactory.getLog(RestController.class);

    @RequestMapping(method = RequestMethod.POST)
    @CrossOrigin("http://localhost:3000")
    public @ResponseBody String loginInformation(@RequestBody String response) {
        PersonalInformation personalInformation = new PersonalInformation();
        Map<String,Object> map = new HashMap<String,Object>();
        ObjectMapper mapper = new ObjectMapper();
        try {
            //convert JSON string to Map
            map = mapper.readValue(String.valueOf(response), new TypeReference<Map<String, Object>>() {} );
            personalInformation.setName(map.get("name").toString());
            personalInformation.setEmail(map.get("email").toString());

//            userMongoRepository.save(personalInformation);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return "MADE IT";
    }



}
