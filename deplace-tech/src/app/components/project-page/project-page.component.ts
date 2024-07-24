import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, switchMap } from 'rxjs/operators';
import { AsyncPipe, NgStyle } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ScreenSizeService } from '../../services/screen-size.service';
import { ProjectService } from '../../services/project.service';
import { Observable } from 'rxjs';
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
  private breakpointObserver = inject(BreakpointObserver);
  private screenSizeService = inject(ScreenSizeService);
  private projectService = inject(ProjectService);

  isMobile$: Observable<boolean> = this.screenSizeService.isMobile$;
  projects$: Observable<Project[]> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => matches),
    switchMap((isHandset) => this.projectService.fetchProjects().pipe(
      map((projects) => {
        return projects.map(project => ({
          ...project,
          cols: isHandset ? 1 : 3,
          rows: 1,
          backgroundImage: `url('/assets/images/project${project.id}.jpg')` // Example path
        }));
      })
    ))
  );
}
