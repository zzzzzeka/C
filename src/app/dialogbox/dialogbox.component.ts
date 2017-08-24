import {Component, OnInit, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {
  private element;
  @Input()title:String = '';

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    this.hide();

    this.element.addEventListener('click', (e) => {
      if (e.target.classList.contains('background')) {
        this.hide();
      }
    });
  }

  public  show() {
    this.element.style.display = 'block';
  }

  public hide() {
    this.element.style.display = 'none';
  }


}
