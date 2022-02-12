package com.chitsimran.klippy.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BaseResponseDTO<T> implements Serializable {
    private T data;
    private String message;

    public BaseResponseDTO(T data) {
        this.data = data;
    }

    public BaseResponseDTO(String message) {
        this.message = message;
    }
}
