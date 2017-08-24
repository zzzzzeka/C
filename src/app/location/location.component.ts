import {Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {DialogboxComponent} from "../dialogbox/dialogbox.component";
import {UserLocation} from "../model/UserLocation";
import {LocationService} from "../services/userlocation.service";

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() private location: UserLocation;
  @Output() private locationChange = new EventEmitter<UserLocation>();
  @ViewChild('dialogBox') private locationDialog: DialogboxComponent;
  private countriesList;
  private selectedCountry;
  private selectedCity;

  constructor(private locationService: LocationService) {
    this.countriesList = locationService.getCoutries();
  }

  ngOnInit() {
    this.selectedCountry = this.countriesList.find(c => c.id == this.location.countryId);
    this.selectedCity = this.selectedCountry ? this.selectedCountry.cities.find(s => s.id == this.location.cityId) : {};
  }

  showDialog() {
    this.selectedCountry = this.countriesList.find(c => c.id == this.location.countryId);
    this.selectedCity = this.selectedCountry ? this.selectedCountry.cities.find(s => s.id == this.location.cityId) : {};
    this.locationDialog.show();
  }

  saveLocation() {
    this.locationChange.emit({
      countryId: this.selectedCountry.id,
      countryName: this.selectedCountry.name,
      cityId: this.selectedCity.id,
      cityName: this.selectedCity.name
    });
    this.locationDialog.hide();
  }

  countryChanged(){
    this.selectedCity = {};
  }
}
