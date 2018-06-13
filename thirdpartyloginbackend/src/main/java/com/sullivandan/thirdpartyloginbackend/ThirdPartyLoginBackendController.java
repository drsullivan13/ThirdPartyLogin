package com.sullivandan.thirdpartyloginbackend;

import java.util.concurrent.atomic.AtomicLong;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ThirdPartyLoginBackendController {

    private final Log log = LogFactory.getLog(RestController.class);

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody void loginInformation(@RequestBody String response) {
        log.info(response);
    }

}
