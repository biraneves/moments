import { Component, OnInit } from '@angular/core';

import { MomentsService } from 'src/app/services/moments.service';
import { Moment } from 'src/app/interfaces/Moment';
import { environment } from 'src/app/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl: string = environment.baseApiUrl;

  // TODO: Search

  constructor(private momentService: MomentsService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleString('pt-BR');
      });

      this.allMoments = data;
      this.moments = data;
    });
  }
}
