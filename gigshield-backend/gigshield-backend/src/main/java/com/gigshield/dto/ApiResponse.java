// package com.gigshield.dto;

// import lombok.Data;
// import lombok.AllArgsConstructor;

// @Data
// @AllArgsConstructor
// public class ApiResponse {
//     private boolean success;
//     private String message;
//     private Object data;
    
//     public static ApiResponse success(String message, Object data) {
//         return new ApiResponse(true, message, data);
//     }
    
//     public static ApiResponse error(String message) {
//         return new ApiResponse(false, message, null);
//     }
// }



package com.gigshield.dto;

public class ApiResponse {
    private boolean success;
    private String message;
    private Object data;
    
    public ApiResponse(boolean success, String message, Object data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
    
    public static ApiResponse success(String message, Object data) {
        return new ApiResponse(true, message, data);
    }
    
    public static ApiResponse error(String message) {
        return new ApiResponse(false, message, null);
    }
    
    public boolean isSuccess() { return success; }
    public String getMessage() { return message; }
    public Object getData() { return data; }
}