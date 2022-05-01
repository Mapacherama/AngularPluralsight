import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';

@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
    <event-thumbnail #thumbnail (click) = "handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
    </div>
    </div>
  </div>
  `
})

export class EventsListCompononent implements OnInit{
  events: IEvent[];
  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName: any){
    this.toastr.success(eventName);
  }
}
