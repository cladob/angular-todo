import { Injectable } from '@angular/core';
import { TODOList, Entry, EntryData } from '../data.model';
import { uuid } from 'uuidv4';

@Injectable()
export class TODOListService {

     public createTODOList(): TODOList {
          const newTODOList: TODOList = {
               entries: []
          };
          return newTODOList;
     }

     public addEntry(todoList: TODOList, entryData: EntryData): Entry {

          const entry: Entry = {
               id: uuid(),
               description: entryData.description,
               dueDate: entryData.dueDate
          };

          todoList.entries.push(entry);

          return entry;
     }

     public removeEntry(todoList: TODOList, entryId: string): void {
          todoList.entries = todoList.entries.filter(e => e.id !== entryId);
     }
}
