import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KstatusApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  metadata() {
    return this.httpClient.get('/api/metadata');
  }
  jobs() {
    return this.httpClient.get('/api/jobs');
  }
}
