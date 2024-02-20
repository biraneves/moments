import { Component, OnInit } from '@angular/core';
import { MomentsService } from 'src/app/services/moments.service';
import { Moment } from 'src/app/interfaces/Moment';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'bn-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss'],
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentService: MomentsService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));
  }

  async removeHandler(id: Number) {
    await this.momentService.removeMoment(id).subscribe();
    this.messageService.add('Momento excluído com sucesso.');
    this.router.navigate(['/']);
  }
}
