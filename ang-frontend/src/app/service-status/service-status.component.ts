import { Component, OnInit, Input } from '@angular/core';

export interface IStatus {
  failed: number;
  group: string;
  id: string;
  name: string;
  namespace: string;
  run: string;
  start_time: string;
  status: string;
  succeded: number;
  target: string;
}

export interface IStatuses {
  [key: string]: Array<IStatus>;
}

@Component({
  selector: 'app-service-status',
  templateUrl: './service-status.component.html',
  styleUrls: ['./service-status.component.scss']
})

export class ServiceStatusComponent implements OnInit {

  @Input() name;
  @Input() responses: IStatuses;
  @Input() openPanels: Array<string>;
  @Input() togglePanel: any;

  checks: Array<{
    key: string,
    values: Array<IStatus>
  }>;

  displayedColumns: string[] = [ 'check', 'results', 'details' ];
  isOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.checks = Object.keys(this.responses).map(key => ({
      key: key,
      values: this.responses[key]
    }));
    this.isOpen = this.openPanels.indexOf(this.name) !== -1;
  }

}
