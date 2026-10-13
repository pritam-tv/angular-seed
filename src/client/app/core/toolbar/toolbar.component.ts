import { Component } from '@angular/core';
import { ThemeService } from '../../shared/theme/theme.service';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggle();
  }
}

