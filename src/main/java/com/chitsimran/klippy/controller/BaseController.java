package com.chitsimran.klippy.controller;

import com.chitsimran.klippy.constants.AppConstants;
import com.chitsimran.klippy.dto.BaseResponseDTO;
import com.chitsimran.klippy.exceptions.RestExceptionHandler;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(AppConstants.APIV1)
public class BaseController extends RestExceptionHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseBody
    public BaseResponseDTO<Object> handleErrors(MethodArgumentNotValidException exception) {
        return new BaseResponseDTO<>("error");
    }
}
