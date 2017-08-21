import {Component, OnInit, Input} from "@angular/core";
import {User} from "./model/user";
import {UserService} from "./services/user.service";
import {Skill} from "./model/skill";
import {ActivatedRoute, Router} from "@angular/router";
import {isUndefined} from "util";

@Component({
    selector: 'user',
    templateUrl: 'user.component.html'
  }
)
export class UserComponent implements OnInit {
  user: User;
  skills: Skill[];
  @Input() id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private  userService: UserService) {
    this.skills = [{id: 1, name: 'JAVA'},
      {id: 2, name: 'C++'},
      {id: 3, name: 'C#'},
      {id: 4, name: 'JavaScript'},
      {id: 5, name: 'AngularJS'},
      {id: 6, name: 'AngularIO'}
    ];
  }

  ngOnInit(): void {
    if (!isUndefined(this.id)) {
      this.user = this.userService.loadById(this.id);
    } else {
      this.route.params.subscribe(params => {
          this.id = params['id'];

          if (!isUndefined(this.id)) {
            this.user = this.userService.loadById(this.id);
          } else {
            this.user = new User();
          }
        }
      );
    }
  }

  public onSubmit() {
    this.userService.save(this.user);
    this.router.navigate(['/users']);
  }

  public  revert() {

  }

  public  removeSkill(skill) {
    console.log(skill);
    // this.userSkills.removeAt(this.userSkills.controls.findIndex(skFG => skFG == skill));
  }

  public  addNewSkill() {
    // this.userSkills.push(this.fb.group(new UserSkill()));
  }

  private saveSkills() {

  }

  public getSkillName(id: number): String {
    return this.skills.find(s => s.id == id).name;
  }
}
