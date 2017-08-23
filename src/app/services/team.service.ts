import {Injectable} from "@angular/core";
import {Team} from "../model/team";
import {isUndefined} from "util";
import {Skill} from "../model/skill";

@Injectable()
export class TeamService {
  private teams: Team[] = [
    {
      id: 1, login: 'Profai', information: '',
      users: [
        {
          id: 11,
          name: 'aa',
          age: 21,
          skills: [{id: 1, skillId: 1, userId: 11, experience: -2}, {id: 2, skillId: 2, userId: 11, experience: 2}]
        },
        {
          id: 12,
          name: 'bb',
          age: 21,
          skills: [{id: 1, skillId: 1, userId: 12, experience: 2}, {id: 2, skillId: 2, userId: 12, experience: 1}]
        }]
    },
    {id: 2, login: 'Junioriai', information: '', users: [{id: 21, name: 'bb', age: 22, skills: []}]}
  ];

  private skills: string[] = [];

  public getAllTeams(): Team[] {
    return this.teams;
  }

  public save(team: Team): Team {
    let oldUser: Team = this.teams.find((uu: Team) => (uu.id == team.id));
    if (isUndefined(oldUser)) {
      team.id = Math.random();
      this.teams.push(team);
      oldUser = team;
    } else {
      Object.assign(oldUser, team);
    }
    return oldUser;
  }

  loadByLogin(login: string): Team {
    let user = this.teams.find((uu: Team) => (uu.login == login));
    return user;
  }

  loadById(id: any) {
    let user = this.teams.find((uu: Team) => (uu.id == id));
    console.log(user);
    return user;
  }
}

