import { Component, Input } from '@angular/core';
import { TODOList, Entry } from '../data.model';
import { StorageService } from '../services/storage.service';
import { TODOListService } from '../services/todolist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TODOListComponent
{
  selectable = true;
  removable = true;

  @Input() todoList: TODOList;

  constructor(
    private storageService: StorageService,
    private todoListService: TODOListService) {}

  remove(entry: Entry): void {
    this.todoListService.removeEntry(this.todoList, entry.id);
    this.storageService.storeState('TODO-LIST', this.todoList);
  }
}
