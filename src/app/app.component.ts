import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { Task } from './models/task.model';
import { TaskSummaryComponent } from './components/task-summary/task-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TaskListComponent, TaskSummaryComponent]
})
export class AppComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Complete Angular Tutorial',
      description: 'Learn about components and data binding',
      completed: false,
      priority: 'high',
    },
    {
      id: 2,
      title: 'Review Code',
      description: 'Review pull request from team member',
      completed: true,
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Update Documentation',
      description: 'Update API documentation for new features',
      completed: false,
      priority: 'low',
    },
    {
      id: 4,
      title: 'Fix Bug #123',
      description: 'Resolve login authentication issue',
      completed: false,
      priority: 'high',
    },
  ];

  onTaskToggled(taskId: number): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
