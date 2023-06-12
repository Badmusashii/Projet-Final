import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public getData(key: string) {
    return localStorage.getItem(key);
  }
  // public addItem(key: string, item: string) {
  //   let arr = (key);
  //   arr.push(item);
  //   localStorage.setItem(key, JSON.stringify(arr));
  // }
  public pushData(key: string, value: string) {
    const storedValue = localStorage.getItem(key);
    let arr: unknown;
    if (storedValue) {
      arr = JSON.parse(storedValue);
    }
    if (Array.isArray(arr)) {
      arr.push(value);
      localStorage.setItem(key, JSON.stringify(arr));
    } else {
      localStorage.setItem(key, JSON.stringify([value]));
    }
  }

  public updateListItem(key: string, value: string, newValue: string): void {
    const itemListString = localStorage.getItem(key);
    if (itemListString) {
      const itemList = JSON.parse(itemListString);
      const index = itemList.indexOf(value);
      if (index !== -1) {
        itemList[index] = newValue;
        localStorage.setItem(key, JSON.stringify(itemList));
      }
    }
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }
  public clearData() {
    localStorage.clear();
  }
}
