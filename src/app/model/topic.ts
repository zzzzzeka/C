import {Team} from "./team";
import {Post} from "./post";
export class Topic{
  id: number;
  title: String;
  content: String;
  author: Team;
  posts: Post[];
}
