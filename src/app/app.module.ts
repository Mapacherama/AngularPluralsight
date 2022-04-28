import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListCompononent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListCompononent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
