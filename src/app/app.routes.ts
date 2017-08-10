import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from "./users.component";
import {UserComponent} from "./user.component";
import {NewsComponent} from "./news/news.component";

export const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'user', component: UserComponent},
  {path: 'news', component: NewsComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
