import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomComponent implements OnInit {
  public roomID: string;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.roomID = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
