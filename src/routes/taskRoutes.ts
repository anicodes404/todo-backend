import { Router } from 'express';
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from './controllers/taskControllers';

const router = Router();

// Get all tasks
router.get('/', getAllTasks);

// Get task by ID
router.get('/:id', getTaskById);

// Create new task
router.post('/', createTask);

// Update task
router.put('/:id', updateTask);

// Delete task
router.delete('/:id', deleteTask);

export default router;
