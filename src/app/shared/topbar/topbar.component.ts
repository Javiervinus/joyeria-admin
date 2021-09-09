import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public isCollapsed = true;

  constructor(public requestServ: RequestService) { }

  ngOnInit(): void {
  }

}
