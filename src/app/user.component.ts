import {Component, OnInit, Input, OnChanges} from "@angular/core";
import {User} from "./model/user";
import {UserService} from "./services/user.service";
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Skill} from "./model/skill";
import {UserSkill} from "./model/userSkill";
import {ActivatedRoute, Router} from "@angular/router";
import {isUndefined} from "util";
import {routes} from "./app.routes";
@Component({
    selector: 'user',
    templateUrl: 'user.component.html'
  }
)
export class UserComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  skills: Skill[];

  constructor(private route: ActivatedRoute,
              private router: Router, private fb: FormBuilder, private  userService: UserService) {
    this.skills = [{id: 1, name: 'JAVA'},
      {id: 2, name: 'C++'},
      {id: 3, name: 'C#'},
      {id: 4, name: 'JavaScript'},
      {id: 5, name: 'AngularJS'},
      {id: 6, name: 'AngularIO'}
    ];
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        let id = params['id'];

        if (!isUndefined(id)) {
          this.user = this.userService.loadById(id);
        } else {
          this.user = new User();
        }
      this.createForm();

      this.userForm.reset(this.user);

      const skillFGs = this.user.skills.map(sk => this.fb.group(sk));
      const skillsFA = this.fb.array(skillFGs);
      this.userForm.setControl('skills', skillsFA);
      }
    );
  }

  public onSubmit() {
    const modifiedSkills: UserSkill[] = this.userForm.value.skills.map((s: UserSkill) => {
      let newUserSkill = Object.assign({}, s, {userId: 1});
      return newUserSkill;
    });

    const saveUser: User = {
      id: this.user.id,
      name: this.userForm.value.name as String,
      age: this.userForm.value.age as number,
      skills: modifiedSkills
    }

    this.user = this.userService.save(saveUser);
    this.router.navigate(['/users']);
  }

  public  revert() {

  }

  public  removeSkill(skill) {
    console.log(skill);
    this.userSkills.removeAt(this.userSkills.controls.findIndex(skFG => skFG == skill));
  }

  public  addNewSkill() {
    this.userSkills.push(this.fb.group(new UserSkill()));
  }

  private  createForm() {
    this.userForm = this.fb.group({
      name: '',
      age: '',
      skills: this.fb.array([])
    });
  }

  private saveSkills(){

  }

  get userSkills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }
}
