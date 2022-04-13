package com.admin.model;









import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "coupon-col")
public class Coupon {

    @Id
    private String id;
    private String CouponName;
    private String CouponCode;
    private String CouponTitle;
    private String CouponType;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCouponName() {
        return CouponName;
    }

    public void setCouponName(String couponName) {
        CouponName = couponName;
    }

    public String getCouponCode() {
        return CouponCode;
    }

    public void setCouponCode(String couponCode) {
        CouponCode = couponCode;
    }

    public String getCouponTitle() {
        return CouponTitle;
    }

    public void setCouponTitle(String couponTitle) {
        CouponTitle = couponTitle;
    }

    public String getCouponType() {
        return CouponType;
    }

    public void setCouponType(String couponType) {
        CouponType = couponType;
    }

    public Coupon() {

    }

    @Override
    public String toString() {
        return "Coupon{" +
                "id='" + id + '\'' +
                ", CouponName='" + CouponName + '\'' +
                ", CouponCode='" + CouponCode + '\'' +
                ", CouponTitle='" + CouponTitle + '\'' +
                ", CouponType='" + CouponType + '\'' +
                '}';
    }

    public Coupon(String id, String couponName, String couponCode, String couponTitle, String couponType) {
        this.id = id;
        CouponName = couponName;
        CouponCode = couponCode;
        CouponTitle = couponTitle;
        CouponType = couponType;

    }
}
