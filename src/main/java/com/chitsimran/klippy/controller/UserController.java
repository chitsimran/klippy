package com.chitsimran.klippy.controller;

import com.chitsimran.klippy.constants.AppConstants;
import com.chitsimran.klippy.constants.URIConstants;
import com.chitsimran.klippy.dto.BaseResponseDTO;
import com.chitsimran.klippy.dto.UserDTO;
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
    public BaseResponseDTO<Object> addUser(@RequestBody UserDTO userDto) {
        userService.addUser(userDto);
        return new BaseResponseDTO<>(AppConstants.RESPONSE_SUCCESS);
    }

    @GetMapping(URIConstants.USERS_ROOT_URL)
    public BaseResponseDTO<Boolean> doesUserExists(@RequestParam("userName") String userName) {
        Boolean isUserPresent = userService.isUserPresent(userName);
        return new BaseResponseDTO<>(isUserPresent, AppConstants.RESPONSE_SUCCESS);
    }

    @PostMapping(URIConstants.LOGIN_USER)
public BaseResponseDTO<Boolean> loginUser(@RequestBody UserDTO userDTO) {
    Boolean loginSuccess = userService.loginUser(userDTO);
    return new BaseResponseDTO<>(loginSuccess, AppConstants.RESPONSE_SUCCESS);
}
}
