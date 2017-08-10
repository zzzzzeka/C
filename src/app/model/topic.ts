import {User} from "./user";
import {Post} from "./post";
export class Topic{
  id: number;
  title: String;
  content: String;
  author: User;
  posts: Post[];
}
