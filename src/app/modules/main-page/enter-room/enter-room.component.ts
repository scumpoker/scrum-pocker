import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-enter-room',
  templateUrl: './enter-room.component.html',
  styleUrls: ['./enter-room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterRoomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
