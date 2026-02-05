import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bg-image',
  imports: [],
  templateUrl: './bg-image.html',
  styleUrl: './bg-image.scss',
})
export class BgImage {
  is_dark = input.required<boolean>();
}
