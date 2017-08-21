import {Component, OnInit} from "@angular/core";
import {Team} from "../model/team";
import {TeamService} from "../services/team.service";
@Component({
    selector: 'users',
    templateUrl: 'teams.component.html'
  }
)
export class TeamsComponent {
  public teams: Team[];

  constructor(private  userService: TeamService) {
    this.teams = this.userService.getAllTeams();
  }
}
