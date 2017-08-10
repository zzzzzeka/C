import {Injectable} from "@angular/core";
import {User} from "../model/user";
import {isUndefined} from "util";
import {Skill} from "../model/skill";

@Injectable()
export class UserService {
  private users: User[] = [
    {id: 1, name: 'aa', age: 1, skills: [{id: 1, skillId: 1, userId:1, experience: 5}, {id: 2, skillId: 2, userId: 1, experience: 2}]},
    {id: 2, name: 'bb', age: 2, skills: []}
  ];

  private skills: string[] = [];

  public getAllUsers(): User[] {
    return this.users;
  }

  public save(user: User): User {
    let oldUser: User = this.users.find((uu: User) => (uu.id == user.id));
    if (isUndefined(oldUser)) {
      user.id = 13;
      this.users.push(user);
      oldUser = user;
    } else {
      Object.assign(oldUser, user);
    }
    return oldUser;
  }

  loadByName(name: string):User {
    let user = this.users.find((uu: User) => (uu.name == name));
    return user;
  }

  loadById(id: any) {
    let user = this.users.find((uu: User) => (uu.id == id));
    console.log(user);
    return user;
  }
}

