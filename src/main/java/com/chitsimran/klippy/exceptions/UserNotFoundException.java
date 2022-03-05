package com.chitsimran.klippy.exceptions;

public class UserNotFoundException extends IllegalArgumentException {
    public UserNotFoundException(String userName) {
        super("User not found: " + userName);
    }
}
