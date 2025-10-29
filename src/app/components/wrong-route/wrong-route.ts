import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-wrong-route',
  imports: [MatButtonModule],
  standalone: true,
  templateUrl: './wrong-route.html',
  styleUrl: './wrong-route.scss',
})
export class WrongRoute {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
