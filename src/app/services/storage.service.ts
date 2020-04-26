import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

     public loadState(stateName: string) {
          try {
               const state = localStorage.getItem(stateName);
               if (state === null) {
                    return undefined;
               }
               return JSON.parse(state);
          }
          catch (err) {
               console.error(`StorageService.loadState: state for ${stateName} cannot be loaded: ${err}`);
               return undefined;
          }
     }

     public storeState(stateName: string, state: object): void {
          try {
               const stringifiedState = JSON.stringify(state);
               localStorage.setItem(stateName, stringifiedState);
          }
          catch (err) {
               console.error(`StorageService.storeState: state for ${stateName} cannote be stored: ${err}`);
          }
     }
}
