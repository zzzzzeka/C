import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {TeamComponent} from "./team/team.component";
import {TeamService} from "./services/team.service";
import {TeamsComponent} from "./teams/teams.component";
import {routing} from "./app.routes";
import {NewsComponent} from "./news/news.component";
import {PostComponent} from "./news/post/post.component";
import {DialogboxComponent} from "./dialogbox/dialogbox.component";
import {ProfileComponent} from "./profile/profile.component";


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamsComponent,
    NewsComponent,
    PostComponent,
    DialogboxComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
