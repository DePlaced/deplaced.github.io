import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgStyle } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ScreenSizeService } from '../../services/screen-size.service';
import { ProjectService } from '../../services/project.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgStyle,
  ]
})
export class ProjectPageComponent {
  private screenSizeService = inject(ScreenSizeService);
  private projectService = inject(ProjectService);

  isMobile$: Observable<boolean> = this.screenSizeService.isMobile$;
  projects$: Observable<Project[]>;

  constructor(){
    this.projects$ = this.projectService.fetchProjects();
  }
}
