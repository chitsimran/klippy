package com.chitsimran.klippy.exceptions;

public class ClipDataNotFound extends IllegalArgumentException {
    public ClipDataNotFound(String userName, String id) {
        super("ClipData not found for user: " + userName + ", id: " + id);
    }
}
