package com.in28minutes.rest.webservices.restfulwebservices.todo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDate;
@Entity
@AllArgsConstructor
@Data
@Getter
@Setter
@ToString
public class Todo {

	public Todo() {
		
	}
	
//	public Todo(Integer id, String username, String description, LocalDate targetDate, boolean done) {
//		super();
//
//		this.id = id;
//		this.username = username;
//		this.description = description;
//		this.targetDate = targetDate;
//		this.done = done;
//	}
	@Id
	@GeneratedValue
	private Integer id;

	private String username;
	
	private String description;
	private LocalDate targetDate;
	private boolean done;



	public boolean isDone() {
		return done;
	}





}