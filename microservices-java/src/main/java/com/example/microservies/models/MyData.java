package com.example.microservies.models;

import java.security.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "myData")
public class MyData {
    @Id
    private String id;
    private String user_id;
    private String name;
    private int review_count;
    private String yelping_since;
    private int useful;
    private int funny;
    private int cool;
    private String elite;
    private String friends;
    private int fans;
    private float average_stars;
    private int compliment_hot;
    private int compliment_more;
    private int compliment_profile;
    private int compliment_cute;
    private int compliment_list;
    private int compliment_note;
    private int compliment_plain;
    private int compliment_cool;
    private int compliment_funny;
    private int compliment_writer;
    private int compliment_photos;
    

    public MyData() {
    }

    public MyData(String user_id,String name, int review_count, String yelping_since, int useful,int funny,int cool,String elite,String friends,int fans,float average_stars,int compliment_hot,int compliment_more,int compliment_profile,int compliment_cute,int compliment_list,int compliment_note,int compliment_plain, int compliment_cool,int compliment_funny,int compliment_writer,int compliment_photos) {
        this.name = name;
        this.user_id = user_id;
        this.name=name;
        this.review_count=review_count;
        this.yelping_since=yelping_since;
        this.useful=useful;
        this.funny=funny;
        this.cool=cool;
      	this.elite=elite;
        this.friends=friends;
        this.fans=fans;
        this.average_stars=average_stars;
        this.compliment_hot=compliment_hot;
        this.compliment_more=compliment_more;
        this.compliment_profile=compliment_profile;
        this.compliment_cute=compliment_cute;
        this.compliment_list=compliment_list;
        this.compliment_note=compliment_note;
        this.compliment_plain=compliment_plain;
        this.compliment_cool=compliment_cool;
        this.compliment_funny=compliment_funny;
        this.compliment_writer=compliment_writer;
        this.compliment_photos=compliment_photos;
       
    }

	@Override
	public String toString() {
		return "MyData [user_id=" + user_id + ", name=" + name + ", review_count=" + review_count + ", yelping_since="
				+ yelping_since + ", useful=" + useful + ", funny=" + funny + ", cool=" + cool + ", elite=" + elite
				+ ", friends=" + friends + ", fans=" + fans + ", average_stars=" + average_stars + ", compliment_hot="
				+ compliment_hot + ", compliment_more=" + compliment_more + ", compliment_profile=" + compliment_profile
				+ ", compliment_cute=" + compliment_cute + ", compliment_list=" + compliment_list + ", compliment_note="
				+ compliment_note + ", compliment_plain=" + compliment_plain + ", compliment_cool=" + compliment_cool
				+ ", compliment_funny=" + compliment_funny + ", compliment_writer=" + compliment_writer
				+ ", compliment_photos=" + compliment_photos + "]";
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getReview_count() {
		return review_count;
	}

	public void setReview_count(int review_count) {
		this.review_count = review_count;
	}

	public String getYelping_since() {
		return yelping_since;
	}

	public void setYelping_since(String yelping_since) {
		this.yelping_since = yelping_since;
	}

	public int getUseful() {
		return useful;
	}

	public void setUseful(int useful) {
		this.useful = useful;
	}

	public int getFunny() {
		return funny;
	}

	public void setFunny(int funny) {
		this.funny = funny;
	}

	public int getCool() {
		return cool;
	}

	public void setCool(int cool) {
		this.cool = cool;
	}

	public String getElite() {
		return elite;
	}

	public void setElite(String elite) {
		this.elite = elite;
	}

	public String getFriends() {
		return friends;
	}

	public void setFriends(String friends) {
		this.friends = friends;
	}

	public int getFans() {
		return fans;
	}

	public void setFans(int fans) {
		this.fans = fans;
	}

	public float getAverage_stars() {
		return average_stars;
	}

	public void setAverage_stars(float average_stars) {
		this.average_stars = average_stars;
	}

	public int getCompliment_hot() {
		return compliment_hot;
	}

	public void setCompliment_hot(int compliment_hot) {
		this.compliment_hot = compliment_hot;
	}

	public int getCompliment_more() {
		return compliment_more;
	}

	public void setCompliment_more(int compliment_more) {
		this.compliment_more = compliment_more;
	}

	public int getCompliment_profile() {
		return compliment_profile;
	}

	public void setCompliment_profile(int compliment_profile) {
		this.compliment_profile = compliment_profile;
	}

	public int getCompliment_cute() {
		return compliment_cute;
	}

	public void setCompliment_cute(int compliment_cute) {
		this.compliment_cute = compliment_cute;
	}

	public int getCompliment_list() {
		return compliment_list;
	}

	public void setCompliment_list(int compliment_list) {
		this.compliment_list = compliment_list;
	}

	public int getCompliment_note() {
		return compliment_note;
	}

	public void setCompliment_note(int compliment_note) {
		this.compliment_note = compliment_note;
	}

	public int getCompliment_plain() {
		return compliment_plain;
	}

	public void setCompliment_plain(int compliment_plain) {
		this.compliment_plain = compliment_plain;
	}

	public int getCompliment_cool() {
		return compliment_cool;
	}

	public void setCompliment_cool(int compliment_cool) {
		this.compliment_cool = compliment_cool;
	}

	public int getCompliment_funny() {
		return compliment_funny;
	}

	public void setCompliment_funny(int compliment_funny) {
		this.compliment_funny = compliment_funny;
	}

	public int getCompliment_writer() {
		return compliment_writer;
	}

	public void setCompliment_writer(int compliment_writer) {
		this.compliment_writer = compliment_writer;
	}

	public int getCompliment_photos() {
		return compliment_photos;
	}

	public void setCompliment_photos(int compliment_photos) {
		this.compliment_photos = compliment_photos;
	}

    
}
