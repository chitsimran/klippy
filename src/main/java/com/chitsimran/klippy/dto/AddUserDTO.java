package com.chitsimran.klippy.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddUserDTO implements Serializable {
    @JsonProperty("user_name")
    private String userName;

    @JsonProperty("password")
    private String password;
}
