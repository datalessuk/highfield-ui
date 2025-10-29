import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IProcessedUserData } from '../../types/user';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-stats-card',
  imports: [MatCardModule, DecimalPipe],
  standalone: true,
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.scss',
})
export class StatsCard implements OnInit {
  @Input({ required: true }) data!: IProcessedUserData;
  totalUsers: number = 0;
  uniqueColors: number = 0;
  averageAge: number = 0;

  ngOnInit() {
    if (!this.data) {
      return;
    }
    this.totalUsers = this.getTotalUsers();
    this.uniqueColors = this.getUniqueColors();
    this.averageAge = this.getAverageAge();
  }

  getTotalUsers(): number {
    return this.data.usersAges.length || 0;
  }

  getUniqueColors(): number {
    if (!this.data.colourFrequency.length) return 0;
    return [...new Set(this.data.colourFrequency.map((item) => item.colour))]
      .length;
  }

  getAverageAge(): number {
    if (!this.data.usersAges.length) return 0;
    const result = this.data.usersAges.reduce(
      (total, a) => total + a.currentAge,
      0
    );
    return result / this.data.usersAges.length;
  }
}
