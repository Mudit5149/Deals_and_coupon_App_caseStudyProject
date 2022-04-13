package com.example.Coupons;



import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.Coupons.Model.Coupon;
import com.example.Coupons.Repository.CouponRepository;
import com.example.Coupons.Service.CouponService;

@SpringBootTest(classes= {CouponTest.class})
 class CouponTest {
	
	@Mock
	CouponRepository couponRepository;
	@InjectMocks
	CouponService couponService;

	public List<Coupon> coupons;


	@Test
	@Order(1)
	 void test_getAllCoupons() {

		List<Coupon> coupons=new ArrayList<Coupon>();

		coupons.add(new Coupon("123","myntra","WERTF","10% off","electronics"));
		coupons.add(new Coupon("02","myntra","end15","15% off","Menswear"));

		when(couponRepository.findAll()).thenReturn(coupons);  //mocking statement
		assertEquals(2,couponService.getAllCoupons().size());
		}



	@Test
	@Order(2)
	 void test_addCoupon() {

		Coupon coupons=new Coupon("03","myntra","end15","15% off","20dec");

		when(couponRepository.save(coupons)).thenReturn(coupons);
		assertEquals(coupons,couponService.addCoupon(coupons));

	}

	@Test
	@Order(3)
	 void test_updateCoupon() {

		Coupon coupons = new Coupon("03","myntra","end15","15% off","25dec");
		String id = "03";
		when(couponRepository.save(coupons)).thenReturn(coupons);
		assertEquals((coupons),couponService.updateCoupon(coupons,id));
	}

	@Test
	@Order(4)
	 void test_deleteCoupon() {
		String id = "03";
		couponService. deleteCoupon(id);
		verify(couponRepository,times(1)).deleteById(id);
	}
	@Test
	@Order(5)
	 void test_CouponName() {
		List<Coupon> coupons=new ArrayList<Coupon>();

		coupons.add(new Coupon("123","myntra","WERTF","10% off","electronics"));
		coupons.add(new Coupon("02","woocommerce","end15","15% off","Menswear"));

		String CouponName="myntra";

		when(couponRepository.findByCouponName(CouponName)).thenReturn(coupons.get(0));
		assertEquals(coupons.get(0),couponService.findByCouponName(CouponName));

	}

}
