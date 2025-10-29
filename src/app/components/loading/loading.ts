import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  imports: [MatProgressSpinnerModule],
  standalone: true,
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class Loading {}
