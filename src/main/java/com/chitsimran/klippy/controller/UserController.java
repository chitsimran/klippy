package com.chitsimran.klippy.controller;

import com.chitsimran.klippy.constants.URIConstants;
import com.chitsimran.klippy.dto.AddUserDTO;
import com.chitsimran.klippy.dto.BaseResponseDTO;
import com.chitsimran.klippy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController extends BaseController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(URIConstants.USERS_ROOT_URL)
    public BaseResponseDTO<Object> addUser(@RequestBody AddUserDTO addUserDto) {
        userService.addUser(addUserDto);
        return new BaseResponseDTO<>("success");
    }

    @GetMapping(URIConstants.USERS_ROOT_URL)
    public BaseResponseDTO<Boolean> doesUserExists(@RequestParam("userName") String userName) {
        Boolean isUserPresent = userService.isUserPresent(userName);
        return new BaseResponseDTO<>(isUserPresent, "success");
    }
}
