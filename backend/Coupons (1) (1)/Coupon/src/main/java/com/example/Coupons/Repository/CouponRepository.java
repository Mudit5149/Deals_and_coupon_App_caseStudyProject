package com.example.Coupons.Repository;



import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.Coupons.Model.Coupon;


public interface  CouponRepository extends MongoRepository<Coupon, String> {

	

	Coupon findByCouponName(String CouponName);


}
