import { Routes } from "@angular/router";

import {
  EventListResolver,
  EventRouteActivator,
  CreateEventComponent,
  EventDetailsComponent,
  EventsListCompononent,
  CreateSessionComponent,
} from "../src/app/events/index";
import { Error404Component } from "./app/errors/404.component";

export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"],
  },
  {
    path: "events",
    component: EventsListCompononent,
    resolve: { events: EventListResolver },
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },

  { path: "events/session/new", component: CreateSessionComponent },

  { path: "404", component: Error404Component },
  {
    path: "",
    redirectTo: "/events",
    pathMatch: "full",
  },
  {
    path: "user",
    loadChildren: () =>
      import("../src/app/user/user.module").then((m) => m.UserModule),
  },
];
