import { Component, OnInit, OnDestroy } from '@angular/core';
import { KstatusApiService } from 'src/app/kstatus-api.service';
import { timer } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'kstatus';
  meta: any;
  jobs: Map<string, any>;
  pollSubscription: any;

  constructor( private kstatusApiService: KstatusApiService) {
  }

  ngOnInit() {
    this.startPoll(10000);
  }

  ngOnDestroy(): void {
    this.stopPoll();
  }

  startPoll(interval: number): void {
    this.pollSubscription = timer(0, interval).subscribe(_ => this.getDataSubscriptions());
  }

  getDataSubscriptions(): void {

    this.kstatusApiService.metadata().subscribe( myValue => {
      this.meta = myValue['meta'];
    });

    this.kstatusApiService.jobs().subscribe( myValue => {
      if (!this.jobs) {
        Object.keys(myValue['jobs']).forEach(key => this.kstatusApiService.togglePanel(key, true));
      }
      this.jobs = myValue['jobs'];
    });

    this.kstatusApiService.lastUpdated = moment().format('MMMM Do YYYY, h:mm:ss a');

  }

  stopPoll(): void {
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }

}