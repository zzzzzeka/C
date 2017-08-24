import {Injectable} from "@angular/core";

@Injectable()
export class LocationService {

  public getCoutries() {
    return [
      {
        id: 1, name: 'Lithuania', cities: [
        {id: 11, name: 'Vilnius'},
        {id: 12, name: 'Kaunas'},
        {id: 13, name: 'Klaipeda'},
        {id: 14, name: 'Sualiai'}]
      },
      {
        id: 2, name: 'Latvia', cities: [
        {id: 21, name: 'Lepoja'},
        {id: 22, name: 'Talin'}]
      },
      {
        id: 3, name: 'Esta', cities: [
        {id: 31, name: 'Riga'},
        {id: 32, name: 'Saarema'}]
      },
      {
        id: 4, name: 'Russia', cities: [
        {id: 41, name: 'Moscow'},
        {id: 42, name: 'Piter'},
        {id: 43, name: 'Kirov'},
        {id: 44, name: 'Vladik'}]
      },
    ];
  }
}
