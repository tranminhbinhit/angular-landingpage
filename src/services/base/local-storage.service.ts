import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: any): void{
    if(typeof(value) == 'object' && value)
    {
      this.storage[key] = JSON.stringify(value);
    } else {
      this.storage[key] = value;
    }
  }

  get(key: string) : any {
    return this.storage[key] || false;
  }

  getObject(key: string) : any {
    return JSON.parse(this.storage[key] || '{}');
  }

  getValue<T>(key: string): any{
    const obj = JSON.parse(this.storage[key] || null);
    return <T>obj || [];
  }

  remove(key: string): any{
    this.storage.removeItem(key);
  }

  clear(){
    this.storage.clear();
  }
}
