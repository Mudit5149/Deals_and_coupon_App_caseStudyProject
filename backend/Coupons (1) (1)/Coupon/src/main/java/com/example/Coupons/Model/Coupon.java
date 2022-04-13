package com.example.Coupons.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "coupon-col")
public class Coupon {

    @Id
    private String id;
    private String couponName;
    private String couponCode;
    private String couponTitle;
    private String couponType;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCouponName() {
        return couponName;
    }

    public void setCouponName(String couponName) {
        this.couponName = couponName;
    }

    public String getCouponCode() {
        return couponCode;
    }

    public void setCouponCode(String couponCode) {
        this.couponCode = couponCode;
    }

    public String getCouponTitle() {
        return couponTitle;
    }

    public void setCouponTitle(String couponTitle) {
        this.couponTitle = couponTitle;
    }

    public String getCouponType() {
        return couponType;
    }

    public Coupon() {
    }

    public Coupon(String id, String couponName, String couponCode, String couponTitle, String couponType) {
        this.id = id;
        this.couponName = couponName;
        this.couponCode = couponCode;
        this.couponTitle = couponTitle;
        this.couponType = couponType;

    }

    @Override
    public String toString() {
        return "Coupon{" +
                "id='" + id + '\'' +
                ", couponName='" + couponName + '\'' +
                ", couponCode='" + couponCode + '\'' +
                ", couponTitle='" + couponTitle + '\'' +
                ", couponType='" + couponType + '\'' +
                '}';
    }

    public void setCouponType(String couponType) {
        this.couponType = couponType;


    }
}