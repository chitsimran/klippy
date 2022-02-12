package com.chitsimran.klippy.mongo.repository;

import com.chitsimran.klippy.mongo.model.ClipDataEntity;
import com.chitsimran.klippy.mongo.model.UserEntity;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClipDataRepository extends MongoRepository<ClipDataEntity, ObjectId> {
    List<ClipDataEntity> findByUserEntity(UserEntity userEntity);
}
