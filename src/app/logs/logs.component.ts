import { Component, OnInit } from '@angular/core';
import { LogsService } from '../logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  constructor(public logService: LogsService) { }

  ngOnInit() {
  }

  onLogsClear(): void {
    this.logService.clear();
  }
}
