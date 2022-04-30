import { Routes } from '@angular/router';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { EventsListCompononent } from './app/events/events-list.component';

export const appRoutes:Routes = [
  {
    path: 'events', component: EventsListCompononent
  },
  {
    path: 'events/:id', component: EventDetailsComponent
  },
  {
    path: '', redirectTo: '/events', pathMatch: 'full'
  }
]
