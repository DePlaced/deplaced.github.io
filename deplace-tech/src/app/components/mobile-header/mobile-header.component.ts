import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'mobile-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {

}
