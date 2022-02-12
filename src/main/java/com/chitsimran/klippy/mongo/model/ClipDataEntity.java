package com.chitsimran.klippy.mongo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document("clips")
public class ClipDataEntity extends BaseEntity {
    @DBRef
    @Field("user")
    private UserEntity userEntity;

    @Field("clip_data")
    private String clipData;
}
