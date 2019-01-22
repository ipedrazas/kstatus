import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-status',
  templateUrl: './service-status.component.html',
  styleUrls: ['./service-status.component.scss']
})
export class ServiceStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() name;
  @Input() responses;

}
