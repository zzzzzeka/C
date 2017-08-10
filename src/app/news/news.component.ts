import { Component, OnInit } from '@angular/core';
import {Topic} from "../model/topic";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public topics: Topic[];

  constructor() { }

  ngOnInit() {
    this.topics = [];
  }

}
