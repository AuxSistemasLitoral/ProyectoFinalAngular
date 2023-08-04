import { Component, Input, OnInit, Output, EventEmitter, EnvironmentInjector } from '@angular/core';
import { ITask } from 'src/app/models/Task.interface';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>
  constructor(){}

  ngOnInit(): void{

  }

  deleteTask(){
   // Notifícamos al componente superior la tarea a eliminar
    this.delete.emit(this.task);//Notificamos al componente superior la tarea a eliminar
  }


}
