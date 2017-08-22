import {User} from "./user";

export class Team{
  id: number;
  login: String = '';
  users: User[] = [];
  information: String = '';
}
