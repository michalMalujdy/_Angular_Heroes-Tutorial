import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  public logs: string[] = [];

  constructor() { }

  add(log: string): void {
    this.logs.push(log);
  }

  clear(): void {
    this.logs = [];
  }
}
