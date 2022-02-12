package com.chitsimran.klippy.mongo.model;

import com.mongodb.lang.NonNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document("clips")
public class UserEntity extends BaseEntity {

    @NonNull
    @Indexed
    @Field("user_name")
    private String userName;

    @NonNull
    @Field("password")
    private String password;
}
