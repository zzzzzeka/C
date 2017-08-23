import {UserSkill} from "./userSkill";

export class User{
  id: number = Math.random();
  name: String = '';
  age: number;
  skills: UserSkill[] = [];
}
