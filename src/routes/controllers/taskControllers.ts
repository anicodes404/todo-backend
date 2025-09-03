import { Request, Response, NextFunction } from 'express';
import { TaskService } from '../../services/taskService';
import { Prisma } from '../../../generated/prisma';

const taskService = new TaskService();

// Get all tasks
export const getAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Get task by ID
export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const task = await taskService.getTaskById(id);
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Create new task
export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log('Creating task with data:', req.body);
    const taskData: Prisma.TodoCreateInput = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || 'PENDING',
      dueDate: req.body.dueDate ? new Date(req.body.dueDate) : null
    };

    const newTask = await taskService.createTask(taskData);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

// Update task
export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    const taskData: Prisma.TodoUpdateInput = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDate: req.body.dueDate ? new Date(req.body.dueDate) : undefined
    };

    const updatedTask = await taskService.updateTask(id, taskData);
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
};

// Delete task
export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id);
    await taskService.deleteTask(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};