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

  constructor(private _kstatusApiService: KstatusApiService) {
  }

  get kstatusApiService(): KstatusApiService {
    return this._kstatusApiService;
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

    this._kstatusApiService.metadata().subscribe( myValue => {
      this.meta = myValue['meta'];
    });

    this._kstatusApiService.jobs().subscribe( myValue => {
      if (!this.jobs) {
        Object.keys(myValue['jobs']).forEach(key => this._kstatusApiService.togglePanel(key, true));
      }
      this.jobs = myValue['jobs'];
    });

    this._kstatusApiService.lastUpdated = moment().format('MMMM Do YYYY, h:mm:ss a');

  }

  stopPoll(): void {
    if (this.pollSubscription) {
      this.pollSubscription.unsubscribe();
    }
  }
}
