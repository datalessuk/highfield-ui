import { Component, OnInit, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../../services/user.service';
import { ColorCard } from '../color-card/color-card';
import { IProcessedUserData } from '../../types/user';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { StatsCard } from '../stats-card/stats-card';
import { Loading } from '../loading/loading';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatToolbarModule,
    ColorCard,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    StatsCard,
    Loading,
  ],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  loading: boolean = false;
  error: string | null = null;

  dataSource = new MatTableDataSource<any>();
  userData!: IProcessedUserData;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'currentAge',
    'ageIn20Years',
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.error = null;
    this.userService.getUserData().subscribe({
      next: (data) => {
        this.userData = data;
        this.dataSource.data = data.usersAges;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load user data.';
        this.loading = false;
        console.error(err);
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
