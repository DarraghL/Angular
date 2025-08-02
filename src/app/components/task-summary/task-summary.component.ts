// task-summary.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'task-summary',
  standalone: true,
  imports: [CommonModule], // For *ngIf and pipes
  templateUrl: './task-summary.component.html',
  styleUrl: './task-summary.component.css'
})
export class TaskSummaryComponent {
  @Input() tasks: Task[] = []; // Receive tasks from parent via property binding

  // Computed properties using getters
  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  get pendingTasks(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  get highPriorityTasks(): number {
    return this.tasks.filter(task => task.priority === 'high' && !task.completed).length;
  }

  get mediumPriorityTasks(): number {
    return this.tasks.filter(task => task.priority === 'medium' && !task.completed).length;
  }

  get lowPriorityTasks(): number {
    return this.tasks.filter(task => task.priority === 'low' && !task.completed).length;
  }

  get completionPercentage(): number {
    if (this.totalTasks === 0) return 0;
    return Math.round((this.completedTasks / this.totalTasks) * 100);
  }

  get progressBarWidth(): string {
    return `${this.completionPercentage}%`;
  }

  // Helper method to get status message
  get statusMessage(): string {
    if (this.pendingTasks === this.totalTasks) {
      return "You've got a lot of work to do sonny jim";
    }
    if (this.completedTasks === this.totalTasks && this.totalTasks > 0) {
      return 'All tasks completed! 🎉';
    } else if (this.pendingTasks === 0) {
      return 'No pending tasks';
    } else if (this.highPriorityTasks > 0) {
      return `${this.highPriorityTasks} high priority task${this.highPriorityTasks > 1 ? 's' : ''} remaining`;
    } else {
      return `${this.pendingTasks} task${this.pendingTasks > 1 ? 's' : ''} remaining`;
    }
  }
}