import {User} from "./user";
import {UserLocation} from "./UserLocation";

export class Team{
  id: number;
  login: String = '';
  location: UserLocation = new UserLocation();
  information: String = '';
  users: User[] = [];

}
