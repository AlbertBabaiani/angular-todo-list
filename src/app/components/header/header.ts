import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  is_dark_theme = input.required<boolean>();

  new_theme = output<boolean>();

  changeTheme(): void {
    this.new_theme.emit(!this.is_dark_theme());
  }
}
