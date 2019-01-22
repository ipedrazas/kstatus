import { Component } from '@angular/core';
import { KstatusApiService } from 'src/app/kstatus-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kstatus';
  constructor( private kstatusApiService: KstatusApiService) {
  }
  meta:any;
  jobs: Map<string, any>; 


  ngOnInit() {
    this.kstatusApiService.metadata().subscribe( myValue => {
      console.log("Found ",myValue);
      this.meta=myValue['meta'];
    })

    this.kstatusApiService.jobs().subscribe( myValue => {
      console.log("Jobs ",myValue);
      this.jobs=myValue['jobs'];
    })

  }

}
