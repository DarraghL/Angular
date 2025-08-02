import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskToggled = new EventEmitter<number>();

  onTaskToggled(taskId: number): void {
    this.taskToggled.emit(taskId);
    console.log(`Task with ID ${taskId} toggled`);
  }
}
