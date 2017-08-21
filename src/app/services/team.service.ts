import {Injectable} from "@angular/core";
import {Team} from "../model/team";
import {isUndefined} from "util";
import {Skill} from "../model/skill";

@Injectable()
export class TeamService {
  private teams: Team[] = [
    {information:'', id: 1, name: 'aa', age: 1, skills: [{id: 1, skillId: 1, userId:1, experience: 5}, {id: 2, skillId: 2, userId: 1, experience: 2}]},
    {information:'', id: 2, name: 'bb', age: 2, skills: []}
  ];

  private skills: string[] = [];

  public getAllTeams(): Team[] {
    return this.teams;
  }

  public save(team: Team): Team {
    let oldUser: Team = this.teams.find((uu: Team) => (uu.id == team.id));
    if (isUndefined(oldUser)) {
      team.id = 13;
      this.teams.push(team);
      oldUser = team;
    } else {
      Object.assign(oldUser, team);
    }
    return oldUser;
  }

  loadByName(name: string):Team {
    let user = this.teams.find((uu: Team) => (uu.name == name));
    return user;
  }

  loadById(id: any) {
    let user = this.teams.find((uu: Team) => (uu.id == id));
    console.log(user);
    return user;
  }
}

