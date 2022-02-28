import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-info-image',
  templateUrl: './info-image.component.html',
  styleUrls: ['./info-image.component.css']
})
export class InfoImageComponent implements OnInit {

  public dataPersonInfo$ = this.sharedSevice.people$;

  constructor(private sharedSevice:SharedService) { }

  ngOnInit(): void {
  }

}
