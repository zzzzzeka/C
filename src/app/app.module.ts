import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {UserComponent} from "./user/user.component";
import {UserService} from "./services/user.service";
import {UsersComponent} from "./users/users.component";
import {routing} from "./app.routes";
import {NewsComponent} from "./news/news.component";
import {PostComponent} from "./news/post/post.component";
import {DialogboxComponent} from "./dialogbox/dialogbox.component";
import {ProfileComponent} from "./profile/profile.component";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
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
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
