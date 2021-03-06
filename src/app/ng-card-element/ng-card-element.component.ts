import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-ng-card-element',
  templateUrl: './ng-card-element.component.html',
  styleUrls: ['./ng-card-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NgCardElementComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() content: string;

  @Output() deleteCardNotify = new EventEmitter<boolean>();

  handleCardDelete() {
    this.deleteCardNotify.emit(true);
  }
}
