package com.chitsimran.klippy.exceptions;

public class UserAlreadyExistsException extends IllegalArgumentException {
    public UserAlreadyExistsException(String userName) {
        super("User already exists with this name: " + userName);
    }
}
