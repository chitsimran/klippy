package com.chitsimran.klippy.service;

import com.chitsimran.klippy.dto.UserDTO;
import com.chitsimran.klippy.exceptions.UserAlreadyExistsException;
import com.chitsimran.klippy.exceptions.UserNotFoundException;
import com.chitsimran.klippy.mongo.model.UserEntity;
import com.chitsimran.klippy.mongo.repository.UserRepository;
import com.chitsimran.klippy.utils.JsonUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void addUser(UserDTO userDto) {
        Optional<UserEntity> user = userRepository.findByUserName(userDto.getUserName());
        if (user.isPresent()) {
            throw new UserAlreadyExistsException(userDto.getUserName());
        }
        UserEntity userEntity = UserEntity.builder()
                .userName(userDto.getUserName())
                .password(userDto.getPassword())
                .build();
        userRepository.save(userEntity);
        log.info("USER_SAVED: {}", JsonUtil.toJson(userEntity));
    }

    public Boolean isUserPresent(String userName) {
        Optional<UserEntity> userEntity = userRepository.findByUserName(userName);
        return userEntity.isPresent();
    }

    public Boolean loginUser(UserDTO userDTO) {
        Optional<UserEntity> user = userRepository.findByUserName(userDTO.getUserName());
        if (!user.isPresent()) {
            throw new UserNotFoundException(userDTO.getUserName());
        }
        if (userDTO.getPassword().equals(user.get().getPassword())) {
            return Boolean.TRUE;
        } else {
            return Boolean.FALSE;
        }
    }

    public void test() {
    }

    public void test2() {

    }
}
