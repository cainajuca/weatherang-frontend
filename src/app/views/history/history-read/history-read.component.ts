import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history-read',
  templateUrl: './history-read.component.html',
  styleUrls: ['./history-read.component.css']
})
export class HistoryReadComponent implements OnInit {

  constructor(private historyService: HistoryService) { }

  showHistory: Boolean = true;

  ngOnInit(): void {
  }

  eraseHistory(): void {
    this.showHistory = false;
    this.historyService.erase().subscribe();
  }

}
