import {Routes, RouterModule} from '@angular/router';
import {TeamsComponent} from "./teams/teams.component";
import {TeamComponent} from "./team/team.component";
import {NewsComponent} from "./news/news.component";
import {ProfileComponent} from "./profile/profile.component";

export const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'teams', component: TeamsComponent},
  {path: 'team/:id', component: TeamComponent},
  {path: 'team', component: TeamComponent},
  {path: 'news', component: NewsComponent},
  {path: 'profile', component: ProfileComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
