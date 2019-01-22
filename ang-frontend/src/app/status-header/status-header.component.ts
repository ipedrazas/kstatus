import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-status-header',
  templateUrl: './status-header.component.html',
  styleUrls: ['./status-header.component.scss']
})
export class StatusHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() meta;
}
