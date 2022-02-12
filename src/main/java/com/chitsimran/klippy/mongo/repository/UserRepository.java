package com.chitsimran.klippy.mongo.repository;

import com.chitsimran.klippy.mongo.model.UserEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserEntity, ObjectId> {
    UserEntity findByUserName(String userName);
}
