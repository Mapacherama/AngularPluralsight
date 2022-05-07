import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle = 'Acme Product Management';

  ngOnInit() {
  of(2,4,6,8).subscribe(item => console.log(item));
  from([20,15,10,5]).subscribe({
    next: (item) => console.log(`resulting item... ${item}`),
    error: (err) => console.error(`error occurred ${err}`),
    complete: () => console.log('complete'),

  });
  }
}
