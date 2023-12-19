import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  customerList: any;
  noData: boolean;

  constructor(private api: ApiService) { }
  ngOnInit(): void {
  }

 
  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = "head-md-screen"
    }
    return styleClass;
  }
}
