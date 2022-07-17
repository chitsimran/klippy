package com.chitsimran.klippy.controller;

import com.chitsimran.klippy.constants.AppConstants;
import com.chitsimran.klippy.constants.URIConstants;
import com.chitsimran.klippy.dto.BaseResponseDTO;
import com.chitsimran.klippy.pojo.ClipData;
import com.chitsimran.klippy.service.ClipDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClipDataController extends BaseController {

    private final ClipDataService clipDataService;

    @Autowired
    public ClipDataController(ClipDataService clipDataService) {
        this.clipDataService = clipDataService;
    }

    @GetMapping(URIConstants.CLIPS_ROOT_URL)
    public BaseResponseDTO<List<ClipData>> getUserClips(@PathVariable("userName") String userName) {
        List<ClipData> clipDataList = clipDataService.getUserClips(userName);
        return new BaseResponseDTO<>(clipDataList, AppConstants.RESPONSE_SUCCESS);
    }

    @PostMapping(URIConstants.CLIPS_ROOT_URL)
    public BaseResponseDTO<Object> addClipData(@PathVariable("userName") String userName, @RequestBody ClipData clipData) {
        clipDataService.addClipData(userName, clipData);
        return new BaseResponseDTO<>(AppConstants.RESPONSE_SUCCESS);
    }

    @PutMapping(URIConstants.CLIPS_ROOT_URL)
    public BaseResponseDTO<Object> updateClipData(@PathVariable("userName") String userName, @RequestBody ClipData clipData) {
        clipDataService.updateClipData(userName, clipData);
        return new BaseResponseDTO<>(AppConstants.RESPONSE_SUCCESS);
    }

    @DeleteMapping(URIConstants.CLIPS_ROOT_URL)
    public BaseResponseDTO<Object> deleteClipData(@PathVariable("userName") String userName, @RequestParam("id") String id) {
        clipDataService.deleteClipData(userName, id);
        return new BaseResponseDTO<>(AppConstants.RESPONSE_SUCCESS);
    }
}
