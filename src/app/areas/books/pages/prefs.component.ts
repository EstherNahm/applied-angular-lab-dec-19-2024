import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BooksStore } from '../services/book-store';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <div class="join">
    @for (by of store.byValues(); track by) {
      <button
        [disabled]="store.by() === by"
        (click)="store.setBy(by)"
        class="btn join-item"
      >
        Sort by {{ by }}
      </button>
    }
  </div>`,
  styles: ``,
})
export class PrefsComponent {
  store = inject(BooksStore);
}