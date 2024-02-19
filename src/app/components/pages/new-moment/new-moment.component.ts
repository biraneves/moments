import { Component } from '@angular/core';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentsService } from 'src/app/services/moments.service';

@Component({
  selector: 'bn-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss'],
})
export class NewMomentComponent {
  btnText = 'Compartilhar!';

  constructor(private momentService: MomentsService) {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    // TODO: exibir mensagem
    // TODO: redirect
  }
}
