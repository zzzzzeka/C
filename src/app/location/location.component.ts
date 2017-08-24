import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {DialogboxComponent} from "../dialogbox/dialogbox.component";
import {UserLocation} from "../model/UserLocation";

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() private location: UserLocation;
  @Output() private locationChange = new EventEmitter<UserLocation>();
  @ViewChild('dialogBox') private locationDialog: DialogboxComponent;
  private tmpLocation: UserLocation;

  constructor() {
  }

  ngOnInit() {
    this.tmpLocation = Object.assign(new UserLocation(), this.location);
  }

  showDialog() {
    this.tmpLocation = Object.assign(new UserLocation(), this.location);
    this.locationDialog.show();
  }

  saveLocation(){
    this.locationChange.emit(this.tmpLocation);
    this.locationDialog.hide();
  }
}
