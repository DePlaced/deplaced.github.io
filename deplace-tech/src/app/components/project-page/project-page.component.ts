import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  standalone: true,
  imports: [
    MatGridListModule,
  ]
})
export class ProjectPageComponent {
}
