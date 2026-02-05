import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeChanger {
  private _darkTheme = signal<boolean>(this.getInitialTheme());
  readonly darkTheme = this._darkTheme.asReadonly();

  constructor() {
    effect(() => {
      const isDark = this._darkTheme();

      document.body.classList.toggle('dark', isDark);

      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  changeTheme(darkTheme: boolean) {
    this._darkTheme.update((v) => !v);
  }

  private getInitialTheme(): boolean {
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
