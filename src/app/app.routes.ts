import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./user/user.component";
import {NewsComponent} from "./news/news.component";
import {ProfileComponent} from "./profile/profile.component";

export const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'user', component: UserComponent},
  {path: 'news', component: NewsComponent},
  {path: 'profile', component: ProfileComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
