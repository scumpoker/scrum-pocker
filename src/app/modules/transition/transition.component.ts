import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
