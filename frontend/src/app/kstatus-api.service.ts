import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KstatusApiService {

  openPanels: Array<string> = [];
  private _lastUpdated: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.openPanels = [];
  }

  metadata() {
    return this.httpClient.get('/api/metadata');
  }

  jobs() {
    return this.httpClient.get('/api/jobs');
  }

  togglePanel(id: string, open: boolean): void {
    if (open && this.openPanels.indexOf(id) === -1) {
      this.openPanels.push(id);
    } else if (this.openPanels.indexOf(id) !== -1) {
      this.openPanels.splice(this.openPanels.indexOf(id), 1);
    }
  }

  getOpenPanels(): Array<string> {
    return this.openPanels;
  }

  get lastUpdated(): string {
    return this._lastUpdated;
  }

  set lastUpdated(dateStr: string) {
    this._lastUpdated = dateStr;
  }

}
