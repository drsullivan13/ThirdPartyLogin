package com.sullivandan.thirdpartyloginbackend;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.json.*;

@Controller
public class ThirdPartyLoginBackendController {

    private final Log log = LogFactory.getLog(RestController.class);

    @RequestMapping(method = RequestMethod.POST)
    @CrossOrigin("http://localhost:3000")
    public @ResponseBody String loginInformation(@RequestBody String response) {
        log.info("HERE");
        log.info(response);
        return "MADE IT";
    }

}
