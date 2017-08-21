import {UserSkill} from "./userSkill";

export class Team{
  id: number;
  name: String = '';
  age: number;
  skills: UserSkill[] = [];
  information: String = '';
}
