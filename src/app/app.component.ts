import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TODOList, Entry, EntryData } from './data.model';
import { StorageService } from './services/storage.service';
import { TODOListService } from './services/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'todo';
  todoList: TODOList;

  entryData: EntryData;
  entryForm: FormGroup;

  constructor(
    private storageService: StorageService,
    private todoListService: TODOListService,
    private formBuilder: FormBuilder
  ) {
    this.entryForm = this.formBuilder.group(
      {
        description: '',
        dueDate: Date()
      }
    );
  }

  ngOnInit(): void {
    const todoListStored: TODOList = this.storageService.loadState('TODO-LIST');
    if (typeof todoListStored === 'undefined') {
      this.todoList = this.todoListService.createTODOList();
    }
    else {
      this.todoList = todoListStored;
    }
  }

  onSubmit(entryData: EntryData) {
    if (this.valid(entryData)) {
      return;
    }
    this.todoListService.addEntry(this.todoList, entryData);
    this.storageService.storeState('TODO-LIST', this.todoList);
    this.entryForm.reset();
  }

  valid(entryData: EntryData): boolean {
     return entryData.description === null || entryData.description.trim() === '';
  }

  remove(entry: Entry): void {
    this.todoListService.removeEntry(this.todoList, entry.id);
    this.storageService.storeState('TODO-LIST', this.todoList);
  }
}
