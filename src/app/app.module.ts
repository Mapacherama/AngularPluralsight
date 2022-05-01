import { AuthService } from './user/auth.service';
import { appRoutes } from './../routes';
import { ToastrService } from './common/toastr.service';
import { EventsListCompononent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListCompononent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [EventService, ToastrService, EventListResolver, EventRouteActivator, AuthService,{
    provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
  }],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
