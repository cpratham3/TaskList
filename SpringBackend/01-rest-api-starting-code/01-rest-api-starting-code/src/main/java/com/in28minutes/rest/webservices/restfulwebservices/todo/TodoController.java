//package com.in28minutes.rest.webservices.restfulwebservices.todo;
//
//import lombok.AllArgsConstructor;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequiredArgsConstructor
//@AllArgsConstructor
//@CrossOrigin(origins = "http://localhost:5173")
//public class TodoController {
//    @Autowired
//    private TodoService todoService;
//    @GetMapping("/users/{username}/todos")
//    public List<Todo> retrieveTodos(@PathVariable String username){
//        return todoService.findByUsername(username);
//
//    }
//
//    @GetMapping("/users/{username}/todos/{id}")
//    public Todo retrieveTodo(@PathVariable String username,@PathVariable int id){
//        return todoService.findById(id);
//
//    }
//
//    @DeleteMapping("/users/{username}/todos/{id}")
//    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable int id){
//        todoService.deleteById(id);
//        return ResponseEntity.noContent().build();
//
//    }
//
//    @PutMapping("/users/{username}/todos/{id}")
//    public Todo updateTodo(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo){
//        todoService.updateTodo(todo);
//        return todo;
//
//    }
//
//    @PostMapping("/users/{username}/todos")
//    public Todo createTodo(@PathVariable String username,  @RequestBody Todo todo){
//       Todo createdTodo = todoService.addTodo(username,todo.getDescription(),todo.getTargetDate(),todo.isDone());
//        return createdTodo;
//
//    }
//
//
//
//
//}
