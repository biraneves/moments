import { Component, Input } from '@angular/core';

@Component({
  selector: 'bn-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss'],
})
export class MomentFormComponent {
  @Input() btnText!: string;
}
