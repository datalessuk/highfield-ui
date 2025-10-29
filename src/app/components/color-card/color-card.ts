import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { IColourFrequency } from '../../types/user';

import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-color-card',
  imports: [MatCardModule, MatGridListModule, MatListModule],
  standalone: true,
  templateUrl: './color-card.html',
  styleUrl: './color-card.scss',
})
export class ColorCard {
  @Input({ required: true }) users!: IColourFrequency;
}
