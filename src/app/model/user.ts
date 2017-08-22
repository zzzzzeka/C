import {UserSkill} from "./userSkill";

export class User{
  id: number;
  name: String = '';
  age: number;
  skills: UserSkill[] = [];
}
