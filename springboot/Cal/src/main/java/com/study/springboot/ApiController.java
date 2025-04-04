package com.study.springboot;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class ApiController {

    @PostMapping("/add")
    public ResDto add(@RequestBody ReqDto req) {
        int result = req.getNum1() + req.getNum2();
        return makeResponse(result);
    }

    @PostMapping("/sub")
    public ResDto subtract(@RequestBody ReqDto req) {
        int result = req.getNum1() - req.getNum2();
        return makeResponse(result);
    }

    @PostMapping("/mul")
    public ResDto multiply(@RequestBody ReqDto req) {
        int result = req.getNum1() * req.getNum2();
        return makeResponse(result);
    }

    @PostMapping("/divide")
    public ResDto divide(@RequestBody ReqDto req) {
        if (req.getNum2() == 0) {
            throw new IllegalArgumentException("0으로 나눌 수 없습니다.");
        }

        double result = Math.round((req.getNum1() * 100.0) / req.getNum2()) / 100.0;
        return makeResponse(result); // double용 메서드 호출
    }

    private ResDto makeResponse(int result) {
        ResDto res = new ResDto();
        res.setResult(result);
        res.setStatus("계산완료");
        return res;
    }
    private ResDto makeResponse(double result) {
        ResDto res = new ResDto();
        res.setResult(result);
        res.setStatus("계산완료");
        return res;
    }
}