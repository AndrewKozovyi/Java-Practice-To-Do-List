package com.example.api.controller;

import com.example.api.model.Task;
import com.example.api.service.TaskService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/all")
    public List<Task> getAllTasks (){
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public Task getTaskByID(@PathVariable Long id){
        return taskService.getTaskById(id);
    }

    @PostMapping("/add")
    public Task createTask(@RequestBody Task task){
        return taskService.createTask(task);
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        return taskService.updateTask(id, task);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }
}