import { Injectable } from '@angular/core';

const STORAGE_KEY = 'theme';
const THEME_CLASS = 'dark-theme';

/**
 * Tracks the active color theme and applies it to the document body.
 * The selected theme is persisted so it survives page reloads.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {

  private dark = false;

  constructor() {
    this.dark = this.readStored();
    this.apply();
  }

  /**
   * Returns true when the dark theme is active.
   */
  isDark(): boolean {
    return this.dark;
  }

  /**
   * Switches between the light and dark themes.
   */
  toggle(): void {
    this.dark = !this.dark;
    this.persist(this.dark);
    this.apply();
  }

  private readStored(): boolean {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'dark';
    } catch (err) {
      return false;
    }
  }

  private persist(themeIsDark: boolean): void {
    try {
      localStorage.setItem(STORAGE_KEY, themeIsDark ? 'dark' : 'light');
    } catch (err) {
      // Storage can be unavailable (private mode) or full; the theme still applies for this session.
    }
  }

  private apply(): void {
    if (typeof document === 'undefined' || !document.body) {
      return;
    }

    if (this.dark) {
      document.body.classList.add(THEME_CLASS);
    } else {
      document.body.classList.remove(THEME_CLASS);
    }
  }
}
