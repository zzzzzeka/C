import {UserSkill} from "./userSkill";

export class User{
  id: number = Math.random();
  name: String = '';
  age: number;
  skills: UserSkill[] = [ { "id": 2, "skillId": 2, "userId": 1, "experience": 1 }];
}
