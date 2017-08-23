import {Component, OnInit, Input} from "@angular/core";
import {Team} from "../model/team";
import {TeamService} from "../services/team.service";
import {Skill} from "../model/skill";
import {ActivatedRoute, Router} from "@angular/router";
import {isUndefined} from "util";
import {User} from "../model/user";

@Component({
    selector: 'user',
    templateUrl: 'team.component.html',
    styleUrls: ['team.component.css']
  }
)
export class TeamComponent implements OnInit {
  team: Team;
  skills: Skill[];
  @Input() id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private  teamService: TeamService) {
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
      this.team = this.teamService.loadById(this.id);
    } else {
      this.route.params.subscribe(params => {
          this.id = params['id'];

          if (!isUndefined(this.id)) {
            this.team = this.teamService.loadById(this.id);
          } else {
            this.team = new Team();
          }
        }
      );
    }
  }

  public onSubmit() {
    this.teamService.save(this.team);
    this.router.navigate(['/teams']);
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

  public addUser() {
    this.team.users.push(new User());
  }

  public deleteUser(user: User) {
    this.team.users = this.team.users.filter(u => u != user);
  }
}
