package com.in28minutes.rest.webservices.restfulwebservices.todo;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@AllArgsConstructor
public class TodoController {
    @Autowired
    private TodoService todoService;
    @GetMapping("/users/{username}/todos")
    public List<Todo> retrieveTodos(@PathVariable String username){
        return todoService.findByUsername(username);

    }

    @GetMapping("/users/{username}/todos/{id}")
    public List<Todo> retrieveTodo(@PathVariable String username){
        return todoService.findByUsername(username);

    }
}
