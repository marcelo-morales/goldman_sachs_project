package com.investing.forecastbackend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.investing.forecastbackend.model.ForecastRequest;
import com.investing.forecastbackend.model.ForecastResponse;
import com.investing.forecastbackend.model.InvestmentDetail;
import com.investing.forecastbackend.service.InvestingForecastService;
import lombok.AllArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/forecast")
@AllArgsConstructor
public class InvestingForecastController {
    private static final Logger log = LoggerFactory.getLogger(InvestingForecastController.class);
    private InvestingForecastService service;
    private ObjectMapper objectMapper;

    @GetMapping
    public ResponseEntity<List<InvestmentDetail>> getInvestmentOptions() throws IOException {
        objectMapper = new ObjectMapper();
        log.info("Received request to retrieve investment options");
        return ResponseEntity.ok(service.getInvestmentOptions());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    @SneakyThrows
    public ResponseEntity<ForecastResponse> getInvestmentOptions(@RequestBody final ForecastRequest request) throws IOException {
        log.info("Received request to forecast investment: {}", objectMapper.writeValueAsString(request));
        log.info("request body: ", request);
        log.info("request body: ", request.getRequest());
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.add("Access-Control-Allow-Origin", "*");
        responseHeaders.add("Access-Control-Allow-Credentials", "true");
        return ResponseEntity.ok()
            .headers(responseHeaders)
            .body(service.getInvestmentOptions(request));
    }
}
