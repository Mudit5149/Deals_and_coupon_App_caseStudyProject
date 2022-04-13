package com.admin.controller;

import com.admin.model.Admin;
import com.admin.model.Coupon;
import com.admin.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/User")
public class AdminController {
	
    @Autowired
    RestTemplate restTemplate;
    
	@Autowired
	public AdminRepository adminRepository;
	
	
	@GetMapping(value = "/all")
	public List<Admin> getAllUsers(){
		return adminRepository.findAll();
	}

    @GetMapping(value = "/name/{name}")
	public Admin getAdmin(@PathVariable("name") String name) {
		return adminRepository.findByName(name);
	}

//    @CrossOrigin(origins = "localhost:9002")
    @PostMapping("/add") // Adding new user
    public String addUser(@RequestBody Admin admin){
        adminRepository.save(admin);
        return "Admin Added Succesfully";
    }
	
//    @DeleteMapping("/delete/{id}") // deleting user with specific id
//    public String deleteAdmin(@PathVariable String id) {
//        adminRepository.deleteById(id);
//        return "Admin With Id = "+ id +" Deleted Successfully";
//    }
	
    @PutMapping("/update/{id}")// updating details of existing admin  
    public String updateAdmin(@RequestBody Admin admin, @PathVariable String id){
        adminRepository.save(admin);
        return "admin is Updated Succesfully";
		
	}

//    <-------------------------------------COUPON-SERVICE--------------------------------->

    @GetMapping(value = "/list")
    public List<Coupon> getAllCoupons(){
        return Arrays.asList(restTemplate.getForObject("http://coupon-service/coupons/list",Coupon[].class));
    }

    @PostMapping(value = "/addCoupon")
    public  String addCoupon(@RequestBody Coupon coupon){
        return  restTemplate.postForObject("http://SER-coupon/coupons/add",coupon,String.class);
    }

    @DeleteMapping(value = "/delete/{id}")
    public String deleteProduct(@PathVariable String id) {
        restTemplate.delete("http://SER-coupon/coupons/delete/{id}", id, String.class);
        return "Coupon with Id = "+id+" Deleted Successfully";
    }
    @PutMapping(value = "/updateCoupon/{id}")
    public String updateCoupon(@RequestBody Coupon coupon, @PathVariable String id){
        restTemplate.put("http://SER-coupon/coupons/update/{id}",coupon,id,String.class);
        return "coupon Updated Succesfully";
    }

}